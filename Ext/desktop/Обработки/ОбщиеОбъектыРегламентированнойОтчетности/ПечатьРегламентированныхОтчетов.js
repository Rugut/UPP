Ext.require(['Данные.Обработки.ОбщиеОбъектыРегламентированнойОтчетности'], function () 
{
	Ext.define('Обработки.ОбщиеОбъектыРегламентированнойОтчетности.ПечатьРегламентированныхОтчетов',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:740px;height:450px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Предварительный просмотр',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'СписокЛистов',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:51px;width:198px;height:244px;',
			height: 244,width: 198,
			columns:
			[
				{
					text:'',
					width:'21',
					dataIndex:'Пометка',
					flex:1,
				},
				{
					text:'Наименование',
					width:'158',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Табличный документ',
					width:'100',
					dataIndex:'ТабличныйДокумент',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ОбщиеОбъектыРегламентированнойОтчетности/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Пометка',
					},
					{
						name:'Наименование',
					},
					{
						name:'ТабличныйДокумент',
					},
				]
			},
			listeners:
			{
				dblclick:
				{
					element: 'body',
					fn: function ()
					{
						var грид = Ext.getCmp('СписокЛистов');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ОбщиеОбъектыРегламентированнойОтчетности.ПечатьРегламентированныхОтчетовСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ОбщиеОбъектыРегламентированнойОтчетности.ПечатьРегламентированныхОтчетовСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			name: 'ТекстСтатистики',
			text: 'ТекстСтатистики',
			style: 'position:absolute;left:11px;top:430px;width:417px;height:15px;',
		},
		{
			xtype: 'label',
			text: 'Печатаемые листы',
			style: 'position:absolute;left:8px;top:7px;width:198px;height:17px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			text: 'Параметры печати',
			style: 'position:absolute;left:8px;top:301px;width:198px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'КоличествоКопий',
			style: 'position:absolute;left:117px;top:319px;width:40px;height:19px;',
			width: 40,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'НадписьКоличествоКопий',
			text: 'Количество копий:',
			style: 'position:absolute;left:14px;top:320px;width:100px;height:18px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'разобрать по копиям',
			style: 'position:absolute;left:14px;top:340px;width:131px;height:15px;',
		},
		{
			xtype: 'label',
			text: 'Параметры таблицы',
			style: 'position:absolute;left:8px;top:361px;width:197px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'checkbox',
			boxLabel: 'отображать сетку',
			style: 'position:absolute;left:14px;top:381px;width:111px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'отображать заголовки',
			style: 'position:absolute;left:14px;top:401px;width:135px;height:16px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:25px;width:198px;height:24px;',
			width: 198,
			height: 24,
			items:
			[
				{
					text:'Установить пометки',
					tooltip:'Установить пометки',
				},
				{
					text:'Снять пометки',
					tooltip:'Снять пометки',
				},
				'-',
				{
					text:'Раскрыть',
					tooltip:'',
				},
				{
					text:'Свернуть',
					tooltip:'',
				},
				'-',
				{
					text:'Переместить вниз',
					tooltip:'Переместить вниз',
				},
				{
					text:'Переместить вверх',
					tooltip:'Переместить вверх',
				},
			]
		},
		{
			xtype: 'label',
			text: 'Содержание',
			style: 'position:absolute;left:212px;top:7px;width:521px;height:17px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:425px;width:740px;height:25px;',
			width: 740,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'',
					tooltip:'Перейти в родительский отчет',
				},
				'-',
				'-',
				{
					text:'Печать',
					tooltip:'abdab67-5c90-4296-8168-239d22024d1',
					iconCls:'x-PrintImmediately',
				},
				'-',
				{
					text:'Закрыть',
					tooltip:'Закрыть',
					iconCls:'x-Close',
					handler: function () {this.up('window').close();},
				},
				'-',
				{
					text:'Справка',
					tooltip:'Открыть справку',
				},
			]
		},
	]
	});
});