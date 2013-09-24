/*!
 * Ext JS Library 4.0
 * Copyright(c) 2006-2011 Sencha Inc.
 * licensing@sencha.com
 * http://www.sencha.com/license
 */

/**
 * @class Ext.ux.desktop.TaskBar
 * @extends Ext.toolbar.Toolbar
 */
Ext.define('Ext.ux.desktop.TBar', {
    extend: 'Ext.toolbar.Toolbar', // TODO - make this a basic hbox panel...

    requires: [
         'Ext.button.Button',
         'Ext.window.*',
         'Ext.menu.Menu',
         'Ext.ux.*',
         'Ext.data.*',
         'Ext.tip.*'
    ],



    initComponent: function() {
        var me = this;

        me.items = [
            {
               text: 'Файл',
               menu: [
                   { text: 'Новый',  },
                   { text: 'Открыть', iconCls: 'x-OpenFile', },
                   { text: 'Закрыть', iconCls: 'x-Close', disabled: true },
                   { text: 'Сохранить', iconCls: 'x-Constant', disabled: true },
                   { text: 'Сохранить как...', iconCls: 'x-Constant', disabled: true },
                   { text: 'Сохранить копию...', iconCls: 'x-Constant', disabled: true },
                   { text: 'Сравнить файлы...', iconCls: 'x-Constant', },
                   { text: 'Печать...', iconCls: 'x-Constant', disabled: true },
                   { text: 'Печать с текущими настройками...', iconCls: 'x-Constant', disabled: true },
                   { text: 'Предварительный просмотр...', iconCls: 'x-Constant', disabled: true },
                   { text: 'Параметры страницы...', iconCls: 'x-Constant', disabled: true },
                   { text: 'Выход', iconCls: 'x-Constant', },

               ],
            },
             {                               
                text: 'Правка',
                menu: [
                   { text: 'Найти', iconCls: 'x-Find', disabled: true },
                   { text: 'Найти следующий', iconCls: 'x-FindNext', disabled: true },
                   { text: 'Найти предыдущий', iconCls: 'x-FindPrevious', disabled: true },
                   { text: 'Заменить', iconCls: 'x-Replace', disabled: true },
                   '-',
                   { text: 'Вырезать', iconCls: 'x-Constant', disabled: true },
                   { text: 'Копировать', iconCls: 'x-Constant', disabled: true },
                   { text: 'Вставить', iconCls: 'x-Constant', disabled: true },
                   { text: 'Очистить',  disabled: true },
                   { text: 'Специальная вставка',  disabled: true },
                   { text: 'Выделить все',  disabled: true },
                   '-',
                   { text: 'Отменить', iconCls: 'x-Constant', disabled: true },
                   { text: 'Вернуть', iconCls: 'x-Constant', disabled: true },
                   '-',
                   { text: 'Свойства', iconCls: 'x-Constant', },
                ],
            },
            {                           
                text: 'Операции',
                
                menu: [
                    { text: 'Константы', iconCls: 'x-Constant', disabled: true },
                    {
                        text: 'Справочник...', iconCls: 'x-Catalog',
                        handler: function() {
                            Ext.require(['js.ФормаСписка'], function () {
                               // var Справочники = Ext.create("Метаданные.Справочники");
                                var объект = Ext.create("js.ФормаСписка");
                             //   объект.ПередатьСсылку(Справочники);
                                объект.show();
                                
                            });
                        },
                    },
                    { text: 'Документы...', iconCls: 'x-Document' },
                    { text: 'Отчет...', iconCls: 'x-Report' },
                    { text: 'Обработка...', iconCls: 'x-Processing' },
                    { text: 'Планы видов характеристик...', iconCls: 'x-ChartOfCharacteristicTypes' },
                    { text: 'План счетов...', iconCls: 'x-ChartOfAccounts' },
                    { text: 'План видов расчета...', iconCls: 'x-ChartOfCalculationTypes' },
                    { text: 'Регистр сведений...', iconCls: 'x-InformationRegister' },
                    { text: 'Регистр накопления...', iconCls: 'x-AccumulationRegister' },
                    { text: 'Регистр бухгалтерии...', iconCls: 'x-AccountingRegister' },
                    { text: 'Регистр расчета...', iconCls: 'x-CalculationRegister' },
                    { text: 'Бизнес-процессы...', iconCls: 'x-BusinessProcess' },
                    { text: 'Задачи...', iconCls: 'x-Task' },
                    { text: 'План обмена...', iconCls: 'x-ExchangePlan' },
                ],
            },
       
            {                               
                text: 'Справочники',
                menu: [
                    {
                        text: 'СписокСправочников',
                    },
                ],
            },
            {                               
                text: 'Документы',
                menu: [
                    {
                        text: '...',
                    },
                ],
            },
            {                               
                text: 'Отчеты',
                menu: [
                    {
                        text: '...',
                    },
                ],
            },
            {                               
            text: 'Сервис',
            menu: [
                {
                    text: '...',
                },
            ],
            },
            {                               
                text: 'Окна',
                menu: [
                    { text: 'Новое окно', iconCls: 'x-NewWindow', disabled: true },
                    { text: 'Горизонтально раздеить окно', iconCls: 'x-Constant', disabled: true },
                    { text: 'Вертикально раздеить окно', iconCls: 'x-Constant', disabled: true },
                    { text: 'Закрыть',  },
                    { text: 'Закрыть все',  },
                    '-',
                    { text: 'Расположить подряд',  },
                    { text: 'Расположить горизонтально', },
                    { text: 'Расположить вертикально',  },
                    '-',
                    {
                        text: 'Служебные окна',
                        menu: [
                                { text: 'Служебные сообщения', iconCls: 'x-Constant' },
                                { text: 'Панель состояния окон', checked: true, },
                                {text: 'Панель окон', checked: true,},
                              ],
                    },
                     '-',
                ],
            },
           {
               text: 'Справка',
               menu: [
                   {
                       text: '...',
                   },
               ],
           },
            
    ];

                    me.callParent();
    },
    
});
