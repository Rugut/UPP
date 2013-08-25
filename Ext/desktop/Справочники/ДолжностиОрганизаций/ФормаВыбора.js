Ext.require(['Данные.Справочники.ДолжностиОрганизаций'], function () 
{
	Ext.define('Справочники.ДолжностиОрганизаций.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:708px;height:321px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Должности организаций',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'СправочникСписок',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:692px;height:280px;',
			height: 280,width: 692,
			columns:
			[
				{
					text:'',
					width:'32',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Код',
					width:'80',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Наименование',
					width:'220',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Категория',
					width:'100',
					dataIndex:'КатегорияСтатистическогоУчета.Представление',
					flex:1,
				},
				{
					text:'По ОКПДТР',
					width:'80',
					dataIndex:'КодПоОКПДТР',
					flex:1,
				},
				{
					text:'Категория учета забронированных (с 2011 года)',
					width:'120',
					dataIndex:'КатегорияУчетаЗабронированных.Представление',
					flex:1,
				},
				{
					text:'Код позиции списка',
					width:'120',
					dataIndex:'КодПозицииСписка.Представление',
					flex:1,
				},
				{
					text:'Основание выслуги лет',
					width:'120',
					dataIndex:'ОснованиеВыслугиЛет.Представление',
					flex:1,
				},
				{
					text:'АУП',
					width:'40',
					dataIndex:'АУП',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.ДолжностиОрганизаций").data,
					fields: ['Ссылка','Картинка','Код','Наименование','КатегорияСтатистическогоУчета.Представление','КодПоОКПДТР','КатегорияУчетаЗабронированных.Представление','КодПозицииСписка.Представление','ОснованиеВыслугиЛет.Представление','АУП',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ДолжностиОрганизаций/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Картинка',
					},
					{
						name:'Код',
					},
					{
						name:'Наименование',
					},
					{
						name:'КатегорияСтатистическогоУчета',
					},
					{
						name:'КодПоОКПДТР',
					},
					{
						name:'КатегорияУчетаЗабронированных',
					},
					{
						name:'КодПозицииСписка',
					},
					{
						name:'ОснованиеВыслугиЛет',
					},
					{
						name:'АУП',
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
						var грид = Ext.getCmp('СправочникСписок');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ДолжностиОрганизаций.ФормаВыбораСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ДолжностиОрганизаций.ФормаВыбораСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:708px;height:25px;',
			width: 708,
			height: 25,
			items:
			[
				{
					text:'Выбрать',
				},
				'-',
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'&Добавить',
				},
				{
					text:'',
				},
				{
					text:'Изменить',
				},
				{
					text:'Установить пометку удаления',
				},
				'-',
				{
					text:'Установить отбор и сортировку списка...',
				},
				{
					text:'Отбор по значению в текущей колонке',
				},
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
					]
				},
				{
					text:'Отключить отбор',
				},
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'(Поля сортировки)',
				},
					]
				},
				'-',
				{
					text:'Вывести список...',
				},
				{
					text:'Настройка списка...',
				},
				'-',
				{
					text:'Обновить',
				},
					]
				},
				'-',
				{
					text:'&Добавить',
				},
				'-',
				{
					text:'',
				},
				{
					text:'Изменить',
				},
				{
					text:'Установить пометку удаления',
				},
				'-',
				{
					text:'Установить отбор и сортировку списка...',
				},
				{
					text:'Отбор по значению в текущей колонке',
				},
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'(Список отборов)',
				},
				'-',
				{
					text:'(История отборов)',
				},
					]
				},
				{
					text:'Отключить отбор',
				},
				'-',
				{
					text:'Обновить',
				},
				'-',
				{
					text:'Справка',
				},
				'-',
			]
		},
		],
	}],
	dockedItems:
	[
	]
	});
});