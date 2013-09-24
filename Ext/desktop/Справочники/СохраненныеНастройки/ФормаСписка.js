Ext.require(['Данные.Справочники.СохраненныеНастройки'], function () 
{
	Ext.define('Справочники.СохраненныеНастройки.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:673px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Варианты отчетов',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'СправочникСписокСохраненныеНастройки',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:657px;height:259px;',
			height: 259,width: 657,
			columns:
			[
				{
					text:'Отчет',
					width:'155',
					dataIndex:'НастраиваемыйОбъект',
					flex:1,
				},
				{
					text:'Наименование',
					width:'172',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Описание',
					width:'210',
					dataIndex:'Описание',
					flex:1,
				},
				{
					text:'Пользователи',
					width:'139',
					dataIndex:'Пользователи',
					flex:1,
				},
				{
					text:'Тип настройки',
					width:'100',
					dataIndex:'ТипНастройки.Представление',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.СохраненныеНастройки").data,
					fields: ['Ссылка','НастраиваемыйОбъект','Наименование','Описание','Пользователи','ТипНастройки.Представление',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/СохраненныеНастройки/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НастраиваемыйОбъект',
					},
					{
						name:'Наименование',
					},
					{
						name:'Описание',
					},
					{
						name:'Пользователи',
					},
					{
						name:'ТипНастройки',
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
						var грид = Ext.getCmp('СправочникСписокСохраненныеНастройки');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.СохраненныеНастройки.ФормаСпискаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.СохраненныеНастройки.ФормаСпискаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:673px;height:25px;',
			width: 673,
			height: 25,
			items:
			[
				'-',
				{
					text:'&Добавить',
					tooltip:'Добавить',
					iconCls:'x-copy',
				},
				'-',
				{
					text:'',
					tooltip:'',
				},
				{
					text:'Изменить',
					tooltip:'Изменить текущий элемент',
					iconCls:'x-Change',
				},
				{
					text:'Установить пометку удаления',
					tooltip:'Установить пометку удаления',
				},
				'-',
				{
					text:'Отбор по значению в текущей колонке',
					tooltip:'Отбор по значению в текущей колонке',
					iconCls:'x-FilterByCurrentValue',
				},
				{
					text:'Отключить отбор',
					tooltip:'Отключить отбор',
					iconCls:'x-ClearFilter',
				},
				'-',
				{
					text:'Загрузить настройку из файла',
					tooltip:'Загрузить настройку из файла',
				},
				{
					text:'Сохранить настройки в файл ',
					tooltip:'Сохранить настройки в файл ',
				},
				'-',
				{
					text:'Загрузить настройку по умолчанию',
					tooltip:'Вернуться к заводским настройкам',
				},
				'-',
				{
					text:'Справка',
					tooltip:'Открыть справку',
				},
			]
		},
		],
	}],
	dockedItems:
	[
	]
	});
});