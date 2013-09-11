Ext.require(['Данные.Обработки.ОбщиеОбъектыРегламентированнойОтчетности'], function () 
{
	Ext.define('Обработки.ОбщиеОбъектыРегламентированнойОтчетности.ПодробнееОбОтчете',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:527px;height:403px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Подробнее об отчете',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			text: 'Формы отчета',
			style: 'position:absolute;left:8px;top:9px;width:511px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			text: 'Возможные периоды представления отчета',
			style: 'position:absolute;left:8px;top:284px;width:511px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:28px;width:511px;height:256px;',
			height: 256,width: 511,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			id: 'ФормыОтчета',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:0px;width:511px;height:166px;',
			height: 166,width: 511,
			columns:
			[
				{
					text:'Утверждена',
					width:'272',
					dataIndex:'ОписаниеОтчета',
					flex:1,
				},
				{
					text:'Начало действия',
					width:'100',
					dataIndex:'ДатаНачалоДействия',
					flex:1,
				},
				{
					text:'Конец действия',
					width:'100',
					dataIndex:'ДатаКонецДействия',
					flex:1,
				},
				{
					text:'Внутренее имя',
					width:'100',
					dataIndex:'ФормаОтчета',
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
						name:'ОписаниеОтчета',
					},
					{
						name:'ДатаНачалоДействия',
					},
					{
						name:'ДатаКонецДействия',
					},
					{
						name:'ФормаОтчета',
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
						var грид = Ext.getCmp('ФормыОтчета');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ОбщиеОбъектыРегламентированнойОтчетности.ПодробнееОбОтчетеСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ОбщиеОбъектыРегламентированнойОтчетности.ПодробнееОбОтчетеСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			name: 'Утверждена',
			text: 'Утверждена',
			style: 'position:absolute;left:6px;top:189px;width:505px;height:67px;text-align:left;',
		},
		{
			xtype: 'label',
			text: 'Описание формы',
			style: 'position:absolute;left:0px;top:169px;width:511px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьИнформацияОтсутствует',
			text: 'Для выбранного вида отчета информация о формах недоступна',
			style: 'position:absolute;left:6px;top:6px;width:499px;height:235px;text-align:center;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьВозможныеПериоды',
			text: 'НадписьВозможныеПериоды',
			style: 'position:absolute;left:14px;top:304px;width:505px;height:66px;text-align:left;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:378px;width:527px;height:25px;',
			width: 527,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Закрыть',
					tooltip:'Закрыть',
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