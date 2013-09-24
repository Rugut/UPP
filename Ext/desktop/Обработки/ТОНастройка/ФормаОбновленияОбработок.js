Ext.require(['Данные.Обработки.ТОНастройка'], function () 
{
	Ext.define('Обработки.ТОНастройка.ФормаОбновленияОбработок',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:981px;height:553px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Обновление обработок обслуживания',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:981px;height:25px;',
			width: 981,
			height: 25,
			items:
			[
				'-',
				{
					text:'Выбрать все',
					tooltip:'Выбрать все',
				},
				{
					text:'Снять все',
					tooltip:'Снять все',
				},
				'-',
				{
					text:'Обновить список обработок с сайта',
					tooltip:'c4f29e0-d168-4fe0-8e64-e982fabf259',
					iconCls:'x-Refresh',
				},
			]
		},
		{
			id: 'ТаблицаСостоянияОбновления',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:965px;height:248px;',
			height: 248,width: 965,
			columns:
			[
				{
					text:'',
					width:'21',
					dataIndex:'Обновить',
					flex:1,
				},
				{
					text:'Имя файла обработки обслуживания',
					width:'223',
					dataIndex:'ИмяОбработкиОбслуживания',
					flex:1,
				},
				{
					text:'Текущее наименование',
					width:'372',
					dataIndex:'ТекущееНаименование',
					flex:1,
				},
				{
					text:'Новое наименование',
					width:'372',
					dataIndex:'НовоеНаименование',
					flex:1,
				},
				{
					text:'Текущая версия',
					width:'108',
					dataIndex:'ТекущаяВерсия',
					flex:1,
				},
				{
					text:'Новая версия',
					width:'108',
					dataIndex:'НоваяВерсия',
					flex:1,
				},
				{
					text:'Текущая версия API',
					width:'121',
					dataIndex:'ТекущаяВерсияAPI',
					flex:1,
				},
				{
					text:'Новая версия API',
					width:'111',
					dataIndex:'НоваяВерсияAPI',
					flex:1,
				},
				{
					text:'Подсказка',
					width:'314',
					dataIndex:'Подсказка',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ТОНастройка/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Обновить',
					},
					{
						name:'ИмяОбработкиОбслуживания',
					},
					{
						name:'ТекущееНаименование',
					},
					{
						name:'НовоеНаименование',
					},
					{
						name:'ТекущаяВерсия',
					},
					{
						name:'НоваяВерсия',
					},
					{
						name:'ТекущаяВерсияAPI',
					},
					{
						name:'НоваяВерсияAPI',
					},
					{
						name:'Подсказка',
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
						var грид = Ext.getCmp('ТаблицаСостоянияОбновления');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ТОНастройка.ФормаОбновленияОбработокСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ТОНастройка.ФормаОбновленияОбработокСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			name: 'НадписьСтараяОО',
			text: 'Старая',
			style: 'position:absolute;left:14px;top:374px;width:99px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьТекущаяОО',
			text: 'Текущая',
			style: 'position:absolute;left:14px;top:398px;width:99px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьНоваяОО',
			text: 'Новая',
			style: 'position:absolute;left:14px;top:422px;width:99px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьНеобновляемаяОО',
			text: 'Необновляемая',
			style: 'position:absolute;left:14px;top:470px;width:99px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьДобавляемаяОО',
			text: 'Добавляемая',
			style: 'position:absolute;left:14px;top:446px;width:99px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'ОписаниеСтараяОО',
			text: '- значение "Версия" или "Версия API" обработки обслуживания в справочнике ниже, чем значение обработки обслуживания с сайта. Доступно обновление с сайта.',
			style: 'position:absolute;left:118px;top:374px;width:849px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ОписаниеТекущаяОО',
			text: '- обработка обслуживания в справочнике и обработка обслуживания на сайте имеют одинаковые значения "Версия" и "Версия API". Доступно обновление с сайта.',
			style: 'position:absolute;left:118px;top:398px;width:849px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ОписаниеНоваяОО',
			text: '- значение "Версия" и "Версия API" обработки обслуживания в справочнике выше, чем значение обработки обслуживания с сайта. Доступно обновление с сайта.',
			style: 'position:absolute;left:118px;top:422px;width:849px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ОписаниеДобавляемаяОО',
			text: '- обработка обслуживания, доступная на сайте, отсутствует в справочнике. Доступно добавление с сайта.',
			style: 'position:absolute;left:118px;top:446px;width:849px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ОписаниеНеобновляемаяОО',
			text: '- для обработки обслуживания в справочнике отсутствует обновление на сайте.  Не доступно обновление с сайта.',
			style: 'position:absolute;left:118px;top:470px;width:849px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЖирныйШрифт',
			text: 'Жирный шрифт',
			style: 'position:absolute;left:14px;top:494px;width:99px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'ОписаниеНеобновляемаяОО1',
			text: '- обработки обслуживания, которые буду обновлены (добавлены) в справочнике.',
			style: 'position:absolute;left:118px;top:494px;width:849px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Отображать отсутствующие в справочнике обработки обслуживания',
			style: 'position:absolute;left:14px;top:305px;width:373px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Отображать текущие, новые и необновляемые обработки обслуживания',
			style: 'position:absolute;left:392px;top:305px;width:390px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Проверять наличие обновлений обработок обслуживания при запуске',
			style: 'position:absolute;left:14px;top:329px;width:381px;height:15px;',
		},
		{
			xtype: 'fieldset',
			title: 'Параметры',
			style: 'position:absolute;left:8px;top:287px;width:965px;height:63px;',
		},
		{
			xtype: 'fieldset',
			title: 'Легенда',
			style: 'position:absolute;left:8px;top:355px;width:965px;height:165px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:528px;width:981px;height:25px;',
			width: 981,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Обновить',
					tooltip:'Кнопка обновления выбранных обработок обслуживания',
				},
				'-',
				{
					text:'Закрыть',
					tooltip:'Закрыть',
					iconCls:'x-Close',
					handler: function () {this.up('window').close();},
				},
			]
		},
	]
	});
});