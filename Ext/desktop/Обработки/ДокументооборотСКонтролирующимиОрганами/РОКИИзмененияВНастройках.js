Ext.require(['Данные.Обработки.ДокументооборотСКонтролирующимиОрганами'], function () 
{
	Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.РОКИИзмененияВНастройках',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:618px;height:511px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Список изменений в настройках, которые необходимо произвести',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'ТаблицаИзменений',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:64px;width:602px;height:414px;',
			height: 414,width: 602,
			columns:
			[
				{
					text:'Изменение',
					width:'328',
					dataIndex:'Представление',
					flex:1,
				},
				{
					text:'Подробнее',
					width:'152',
					dataIndex:'Подробнее',
					flex:1,
				},
				{
					text:'Старое значение',
					width:'100',
					dataIndex:'СтароеЗначение',
					flex:1,
				},
				{
					text:'Новое значение',
					width:'100',
					dataIndex:'НовоеЗначение',
					flex:1,
				},
				{
					text:'Изменение',
					width:'426',
					dataIndex:'Настройка',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ДокументооборотСКонтролирующимиОрганами/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Представление',
					},
					{
						name:'Подробнее',
					},
					{
						name:'СтароеЗначение',
					},
					{
						name:'НовоеЗначение',
					},
					{
						name:'Настройка',
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
						var грид = Ext.getCmp('ТаблицаИзменений');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.ДокументооборотСКонтролирующимиОрганами.РОКИИзмененияВНастройкахСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ДокументооборотСКонтролирующимиОрганами.РОКИИзмененияВНастройкахСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			name: 'НадписьВнимание',
			text: 'Внимание!\r\nПо информации на сервере автоматической настройки необходимо произвести следующие изменения в параметрах документооборота по учетной записи <УчетнаяЗапись>.',
			style: 'position:absolute;left:8px;top:8px;width:602px;height:46px;',
		},
		{
			xtype: 'fieldset',
			title: '',
			style: 'position:absolute;left:8px;top:57px;width:602px;height:3px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:486px;width:618px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Произвести автоматическую настройку',
				},
				'-',
				{
					text:'Отмена',
				},
			]
		},
	]
	});
});