//# sourceMappingURL=maps/core.js.map
window.mobileCheck = function() {
    let check = false;
    (function(a) {
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
    })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
  };
  
  if (mobileCheck() == false) {
    document.querySelectorAll('.whats-link').forEach((button) => {
        button.href = button.href.replace('api', 'web')
    })
  }

// Add your custom JS code here
function whats() {
    var valor1 = document.querySelector('#price').innerHTML; // obtem o valor impresso

    var select = document.getElementById('ct');
    var atual = select.options[select.selectedIndex].value;

    var select = document.getElementById('cd');
    var atual1 = select.options[select.selectedIndex].value;

    var select = document.getElementById('dt');
    var futura = select.options[select.selectedIndex].value;

    var select = document.getElementById('dd');
    var futura1 = select.options[select.selectedIndex].value;

    //tratando elo atual
    if (atual == 'f') {
        var atual2 = 'ferro '
    }
    if (atual == 'b') {
        var atual2 = 'bronze '
    }
    if (atual == 's') {
        var atual2 = 'prata '
    }
    if (atual == 'g') {
        var atual2 = 'ouro '
    }
    if (atual == 'p') {
        var atual2 = 'platina '
    }
    if (atual == 'd') {
        var atual2 = 'diamante '
    }

    //tratando elo futuro

    if (futura == 'f') {
        var futura2 = 'ferro'
    }
    if (futura == 'b') {
        var futura2 = 'bronze'
    }
    if (futura == 's') {
        var futura2 = 'prata'
    }
    if (futura == 'g') {
        var futura2 = 'ouro'
    }
    if (futura == 'p') {
        var futura2 = 'platina'
    }
    if (futura == 'd') {
        var futura2 = 'diamante'
    }
    if (futura == 'm') {
        var futura2 = 'mestre'
    }
    if (futura == 'gm') {
        var futura2 = 'grao mestre'
    }
    if (futura == 'c') {
        var futura2 = 'desafiante'
    }

    var text = 'Olá,%20estou%20no%20site,%20e%20quero%20Elo%20Job.%20Estou%20no%20'+atual2+'%20'+atual1+'%20e%20quero%20chegar%20no%20'+futura2+'%20'+futura1+', no%20valor%20de%20'+valor1+"."

    //var text = atual2.concat(concat).concat(atual1).concat('e%20quero%20ir%20para%20o').concat(concat).concat(futura2).concat(concat).concat(futura1).concat(concat).concat('no').concat(concat).concat('valor').concat(concat).concat('de').concat(concat).concat(valor1)

    if (mobileCheck() == false) {
        type = "web"
    } else {
        type = "api"
    }

    var url = `https://${type}.whatsapp.com/send?1=pt_BR&phone=5571996656742&text=`.concat(text);

    window.open(url);
}

$(document).ready(function() {
    $("body").mouseenter(function() {
        var valor = conversor(document.querySelector('#price').innerHTML); // obtem o valor impresso
        var valor_inicial = conversor(document.querySelector('#price').getAttribute('valor-inicial')); // obtem o valor inicial armazenado (nao sofre alterações)
        // vai percorrer todos os inputs do tipo checkbox (referentes aos adicionais)


        // vai tratar os valores para que não ocorra erros nos calculos (ex: NaN, undefined)
        function conversor(input) {
            if (typeof input == 'number')
                return input;

            let res;
            input = input.toString().replace(/[^0-9,.]/g, '');
            if (input.match(/(,)\d{2}$/)) {
                res = input.replace(/\./g, '').replace(',', '.')
            } else {
                res = input.replace(',', '');
            }

            return parseFloat(res);
        }


        // formata o resultado final para ser impresso em moeda real
        const formatCurrency = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        });
    });
    $("#ct").mouseup(function() {
        var valorDaDiv = $("#price").text();
        if ((valorDaDiv == "R$  0,00") || (valorDaDiv == "false") || valorDaDiv == "O elo inicial não pode ser maior que o elo final!") {
            $("#price").addClass("btn-success");
            $('#price').text('O elo inicial não pode ser maior que o elo final!');
            $(".form-check-input").prop('disabled', true);
        } else {
            $("#price").removeClass("btn-success");
            $(".form-check-input").prop('disabled', false);
        }

    });
    $("#dt").mouseup(function() {
        var valorDaDiv = $("#price").text();
        if ((valorDaDiv == "R$  0,00") || (valorDaDiv == "false") || valorDaDiv == "O elo inicial não pode ser maior que o elo final!") {
            $("#price").addClass("btn-danger");
            $('#price').text('O elo inicial não pode ser maior que o elo final!');
            $(".form-check-input").prop('disabled', true);
        } else {
            $("#price").removeClass("btn-success");
            $(".form-check-input").prop('disabled', false);
        }

    });

    $('#ct').change(function() {
        var src = $(this).find('option:selected').attr('data-img');
        $('img#eloa').attr('src', src);
        $(".form-check-input").prop("checked", false);

    });
    $('#dt').change(function() {
        var src = $(this).find('option:selected').attr('data-img');
        $('img#elof').attr('src', src);
        $(".form-check-input").prop("checked", false);
        opt = $(this).children("option:selected").attr('id');
        if ((opt == 'm') || (opt == 'c') || (opt == 'gm')) {
            $('#dd').empty()
                .append('<option selected="selected">1</option>');
        } else {
            $('#dd').empty()
                .append('<option>4</option><option>3</option><option>2</option><option selected="selected">1</option>');
        }
    });
});

function EloEvolution(attrs) {

    this._products = {
        f4: {

            price: 10
        },
        f3: {

            price: 10
        },
        f2: {

            price: 10
        },
        f1: {

            price: 10
        },
        b4: {

            price: 15
        },
        b3: {

            price: 15
        },
        b2: {

            price: 15
        },
        b1: {

            price: 15
        },
        s4: {

            price: 15
        },
        s3: {

            price: 15
        },
        s2: {

            price: 15
        },
        s1: {

            price: 20
        },
        g4: {

            price: 20
        },
        g3: {

            price: 20
        },
        g2: {

            price: 20
        },
        g1: {

            price: 30
        },
        p4: {

            price: 30
        },
        p3: {

            price: 30
        },
        p2: {

            price: 30
        },
        p1: {

            price: 50
        },
        
        d4: {

            price: 60
        },
        d3: {

            price: 80
        },
        d2: {

            price: 120
        },
        d1: {

            price: 150
        },
        m4: {
            id: 0,
            price: 0
        },
        m3: {
            id: 0,
            price: 0
        },
        m2: {
            id: 0,
            price: 0
        },
        m1: {
            id: 0,
            price: 720
        },
        gm4: {
            id: 0,
            price: 0
        },
        gm3: {
            id: 0,
            price: 0
        },
        gm2: {
            id: 0,
            price: 0
        },
        gm1: {
            id: 0,
            price: 1240
        },
        c4: {
            id: 0,
            price: 150
        },
        c3: {
            id: 0,
            price: 150
        },
        c2: {
            id: 0,
            price: 150
        },
        c1: {
            id: 0,
            price: 1500
        }
    };

    this._errorMessages = {
        dest_lt_cur: "Nível Desejado é menor que o Atual"
    }

    this._sequence = [
        'f4', 'f3', 'f2', 'f1',
        'b4', 'b3', 'b2', 'b1',
        's4', 's3', 's2', 's1',
        'g4', 'g3', 'g2', 'g1',
        'p4', 'p3', 'p2', 'p1',
        'd4', 'd3', 'd2', 'd1',
        'm4', 'm3', 'm2', 'm1',
        'gm4', 'gm3', 'gm2', 'gm1',
        'c4', 'c3', 'c2', 'c1'
    ];

    this.errors = [];

    this.currencyFormat = 'R$ ';
    this.currencyDecimalSeparator = ',';

    this.settings = function(attrs) {
        for (var key in attrs) {
            this[key] = attrs[key];
        }
        this._attachAddToCart();

        return this;
    }

    this.change = function() {
        this.ck = $(this.selectCurrentTier).val() + $(this.selectCurrentDivision).val();
        this.dk = $(this.selectDestinationTier).val() + $(this.selectDestinationDivision).val();
        this.current = this._products[this.ck];
        this.destination = this._products[this.dk];

        var price = this.sumValue();
        $(this.priceContainer).text(this._formatCurrency(price));

        $("#price").attr("valor-inicial", price);
        return this;
    }

    this.sumValue = function() {
        this._getSequence();
        if (this.i_dest < this.i_cur) {
            this._addError('dest_gt_cur');
            return false;
        }

        var sum = 0;
        this._execInSequence(function(p, k) {
            sum += p.price;
        });
        return sum;
    }

    this.errorMessages = function() {
        var trErrors = [];
        for (var i = 0; i < this.errors.length; i++) {
            var k = this.errors[i];
            if (this._errorMessages[k]) {
                trErrors.push(this._errorMessages[k]);
            } else {
                trErrors.push(k);
            }
            return trErrors;
        }
    }

    // ============== PRIVATE METHODS ================
    this._getSequence = function() {
        for (var i = 0; i < this._sequence.length; i++) {
            if (this.ck === this._sequence[i]) {
                this.i_cur = i;
            }
            if (this.dk === this._sequence[i]) {
                this.i_dest = i;
            }
        }
    }

    this._execInSequence = function(func) {
        for (var i = this.i_cur; i < this.i_dest; i++) {
            var p_key = this._sequence[i];
            var product = this._products[p_key];
            func(product, p_key);
        }
    }

    this._formatCurrency = function(val) {
        var o = [];
        var decPart = new String(parseInt((val - parseInt(val)) * Math.pow(10, this._currencyDecimalQty)) || 0);
        var intPart = new String(parseInt(val) || 0);
        if (decPart < 10) {
            decPart = "0" + decPart;
        }

        o.push(this.currencyFormat);
        o.push('')
        o.push(intPart);

        o.push(this.currencyDecimalSeparator);
        o.push(decPart);

        return o.join('');
    }

    this._attachAddToCart = function() {
        var evo = this;
        $(evo.addToCartButton).click(function() {
            evo.addToCart();
        });
    }

    this._addError = function(err) {
        this.errors.push(err);
    }

    this.init = function(attrs) {
        if (attrs) {
            this.settings(attrs);
        }
    }

    this.init(attrs);
}

$(function() {
    var evo = new EloEvolution({
        selectCurrentTier: '#ct',
        selectCurrentDivision: '#cd',
        selectDestinationTier: '#dt',
        selectDestinationDivision: '#dd',
        priceContainer: '#price',
        priceContainerOriginal: '#priceoriginal'
    }).change();
    $('#ct,#cd,#dt,#dd').change(function() {
        // we need to call inside an anonymous function
        // because we use `this`, inside evo.change function,
        // referring to evo instance, instead the dom object
        // that was changed.
        evo.change();
    });
});
