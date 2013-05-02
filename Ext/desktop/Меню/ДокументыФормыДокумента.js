
Ext.define('Меню.ДокументыФормыДокумента',
    {
        requires: ['Метаданные.Документы'],
        extend: 'MyDesktop.BogusModule',
        init: function ()
        {
            this.launcher =
            {
                text: 'Документы',
                iconCls: 'bogus',
                handler: function () {
                    return false;
                },
                menu: {
                    items: []
                }
            };
            var Документы = Ext.create("Метаданные.Документы");
            for (var Номер = 0, Элемент; Элемент = Документы[Номер]; Номер++)
            {
                if (Элемент.ОсновнаяФормаОбъекта == '00000000-0000-0000-0000-000000000000')
                {
                        continue;
                }
                this.launcher.menu.items.push
                (
                    {
                        text: Элемент.Имя,
                        iconCls: 'bogus',
                        handler: this.createWindow,
                        scope: this,
                        windowId: ++windowIndex,
                        FormId: 'Документы.' + Элемент.Имя + '.ФормаДокумента',
                    }
                );
                if (Номер > 50)
                {
                    break;
                }
            }
        }
    }
);