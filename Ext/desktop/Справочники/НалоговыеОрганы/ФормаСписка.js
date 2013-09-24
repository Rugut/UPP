Ext.require(['Данные.Справочники.НалоговыеОрганы'], function () 
{
	Ext.define('Справочники.НалоговыеОрганы.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:831px;height:401px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Налоговые органы',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'СправочникДерево',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:815px;height:360px;',
			height: 360,width: 815,
			columns:
			[
				{
					text:'Код',
					width:'104',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Наименование',
					width:'158',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'E-mail для защищ. документооборота',
					width:'211',
					dataIndex:'АдресЭлектроннойПочтыДляЦелейДокументооборотаСНалогоплательщиками',
					flex:1,
				},
				{
					text:'Комментарий',
					width:'151',
					dataIndex:'Комментарий',
					flex:1,
				},
				{
					text:'Вид',
					width:'120',
					dataIndex:'Вид.Представление',
					flex:1,
				},
				{
					text:'E-mail',
					width:'120',
					dataIndex:'АдресЭлектроннойПочты',
					flex:1,
				},
				{
					text:'Учет нал.',
					width:'80',
					dataIndex:'УчетНалогоплательщиков',
					flex:1,
				},
				{
					text:'Прием отч.',
					width:'80',
					dataIndex:'ПриемНалоговойОтчетности',
					flex:1,
				},
				{
					text:'Вышестоящий НО',
					width:'164',
					dataIndex:'Родитель',
					flex:1,
				},
				{
					text:'Полное наименование',
					width:'164',
					dataIndex:'ПолноеНаименование',
					flex:1,
				},
				{
					text:'ИНН',
					width:'80',
					dataIndex:'ИНН',
					flex:1,
				},
				{
					text:'КПП',
					width:'72',
					dataIndex:'КПП',
					flex:1,
				},
				{
					text:'Адрес',
					width:'120',
					dataIndex:'Адрес',
					flex:1,
				},
				{
					text:'Телефон',
					width:'120',
					dataIndex:'Телефон',
					flex:1,
				},
				{
					text:'Адрес сайта',
					width:'120',
					dataIndex:'АдресСайта',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.НалоговыеОрганы").data,
					fields: ['Ссылка','Родитель.Представление','Код','Наименование','АдресЭлектроннойПочтыДляЦелейДокументооборотаСНалогоплательщиками','Комментарий','Вид.Представление','АдресЭлектроннойПочты','УчетНалогоплательщиков','ПриемНалоговойОтчетности','Родитель','ПолноеНаименование','ИНН','КПП','Адрес','Телефон','АдресСайта',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/НалоговыеОрганы/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Код',
					},
					{
						name:'Наименование',
					},
					{
						name:'АдресЭлектроннойПочтыДляЦелейДокументооборотаСНалогоплательщиками',
					},
					{
						name:'Комментарий',
					},
					{
						name:'Вид',
					},
					{
						name:'АдресЭлектроннойПочты',
					},
					{
						name:'УчетНалогоплательщиков',
					},
					{
						name:'ПриемНалоговойОтчетности',
					},
					{
						name:'Родитель',
					},
					{
						name:'ПолноеНаименование',
					},
					{
						name:'ИНН',
					},
					{
						name:'КПП',
					},
					{
						name:'Адрес',
					},
					{
						name:'Телефон',
					},
					{
						name:'АдресСайта',
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
						var грид = Ext.getCmp('СправочникДерево');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.НалоговыеОрганы.ФормаСпискаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.НалоговыеОрганы.ФормаСпискаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:831px;height:25px;',
			width: 831,
			height: 25,
			items:
			[
				{
					text:'Выбрать',
					tooltip:'Выбрать значение',
					iconCls:'x-Select',
				},
				'-',
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'&Добавить',
					tooltip:'Добавить',
					iconCls:'x-copy',
				},
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
					text:'Удалить',
					tooltip:'Удалить текущий',
				},
				{
					text:'Установить пометку удаления',
					tooltip:'Установить пометку удаления',
				},
				{
					text:'',
					tooltip:'',
				},
				'-',
				{
					text:'Установить отбор и сортировку списка...',
					tooltip:'Отбор и сортировка',
					iconCls:'x-FilterAndSort',
				},
				{
					text:'Отбор по значению в текущей колонке',
					tooltip:'Отбор по значению в текущей колонке',
					iconCls:'x-FilterByCurrentValue',
				},
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
					]
				},
				{
					text:'Отключить отбор',
					tooltip:'Отключить отбор',
					iconCls:'x-ClearFilter',
				},
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'(Поля сортировки)',
					tooltip:'',
				},
					]
				},
				'-',
				{
					text:'Вывести список...',
					tooltip:'Вывести список',
					iconCls:'x-OutputList',
				},
				{
					text:'Настройка списка...',
					tooltip:'Настройка списка',
					iconCls:'x-ListSettings',
				},
				'-',
				{
					text:'Обновить',
					tooltip:'Обновить текущий список',
					iconCls:'x-Refresh',
				},
					]
				},
				'-',
				{
					text:'&Добавить',
					tooltip:'Добавить',
					iconCls:'x-copy',
				},
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
				{
					text:'',
					tooltip:'',
				},
				'-',
				{
					text:'Просмотр в виде дерева',
					tooltip:'',
				},
				'-',
				{
					text:'Установить отбор и сортировку списка...',
					tooltip:'Отбор и сортировка',
					iconCls:'x-FilterAndSort',
				},
				{
					text:'Отбор по значению в текущей колонке',
					tooltip:'Отбор по значению в текущей колонке',
					iconCls:'x-FilterByCurrentValue',
				},
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'(Список отборов)',
					tooltip:'',
				},
				'-',
				{
					text:'(История отборов)',
					tooltip:'',
					iconCls:'x-FilterHistory',
				},
					]
				},
				{
					text:'Отключить отбор',
					tooltip:'Отключить отбор',
					iconCls:'x-ClearFilter',
				},
				'-',
				{
					text:'Обновить',
					tooltip:'Обновить текущий список',
					iconCls:'x-Refresh',
				},
				'-',
				{
					text:'Справка',
					tooltip:'Открыть справку',
				},
				'-',
				{
					text:'Загрузить классификатор',
					tooltip:'Загрузить классификатор СОУН',
				},
				'-',
				{
					text:'Виды налоговых органов',
					tooltip:'',
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