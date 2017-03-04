


//二次封装
    Carousel = function () {
        function Carousel($ct) {
            this.$ct = $ct;
            this.init();
            this.bind();
            this.autoPlay();
        }

        Carousel.prototype.init = function () {
            var $imgCt = this.$imgCt = this.$ct.find('.img-ct'),
                $btnPre = this.$btnPre = this.$ct.find('.btn-pre'),
                $btnNxt = this.$btnNxt = this.$ct.find('.btn-nxt'),
                $bullet = this.$bullet = this.$ct.find('.bullet');

            var $firstImg = $imgCt.find('li').first(),
                $lastImg = $imgCt.find('li').last();

            this.pageIndex = 0;
            this.imgLength = $imgCt.children().length;
            this.isAnimate = false;
            this.imgWidth = $firstImg.width();

            $imgCt.prepend($lastImg.clone());
            $imgCt.append($firstImg.clone());

            $imgCt.width(this.imgWidth * $imgCt.children().length);
            $imgCt.css('left', -this.imgWidth);
        };

        Carousel.prototype.bind = function () {
            var _this = this;
            this.$btnPre.on('click', function(e){
                e.preventDefault();
                _this.playPre();
            })
            this.$btnNxt.on('click', function(e){
                e.preventDefault();
                _this.playNxt();
            })

            this.$bullet.find('li').on('click', function(){
                _this.playTo($(this).index());
            })
        };

        Carousel.prototype.stopAuto = function(e){
            e.clearInterval(clock);
        }

        Carousel.prototype.autoPlay = function () {
            var _this = this;
            this.clock = setInterval(function(){
                _this.playNxt();
            }, 4000);
        }

        Carousel.prototype.playTo = function (n){
            var _this = this;
            if(this.isAnimate === true) return;

            this.isAnimate = true;

            this.$imgCt.animate({
                left: '+=' + (_this.pageIndex-n)*_this.imgWidth
            },function(){
                _this.pageIndex = n;
                _this.isAnimate = false;
                _this.setBullet();
            })
        }

        Carousel.prototype.playNxt = function () {
            var _this = this;
            if(this.isAnimate === true) return;

            this.isAnimate = true;

            this.$imgCt.animate({
                left: '-=' + this.imgWidth
            },function(){
                _this.pageIndex++;
                if(_this.pageIndex === _this.imgLength){
                    _this.$imgCt.css('left', -_this.imgWidth);
                    _this.pageIndex = 0;
                }
                _this.isAnimate = false;
                _this.setBullet();
            })
        }

        Carousel.prototype.playPre = function () {
            var _this = this;
            if(this.isAnimate === true) return;

            this.isAnimate = true;

            this.$imgCt.animate({
                left: '+=' + this.imgWidth
            },function(){
                _this.pageIndex--;
                if(_this.pageIndex<0){
                    _this.$imgCt.css('left', -(_this.imgLength*_this.imgWidth));
                    _this.pageIndex = _this.imgLength - 1;
                }
                _this.isAnimate= false;
                _this.setBullet();
            })
        }

        Carousel.prototype.setBullet = function () {
            this.$bullet.children().removeClass('active').eq(this.pageIndex).addClass('active')
        }
        return{
            init: function ($ct) {
                $ct.each(function (index, node) {
                    new Carousel($(node))
                })
            }
        }
    }()

    Carousel.init($('.carousel'))

