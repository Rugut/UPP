Ext.define('Справочники.НалоговыеОрганы.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:831px;height:401px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Налоговые органы',
	
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
					width:'1200',
					dataIndex:'Вид',
					flex:1,
				},
				{
					text:'E-mail',
					width:'1200',
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
					width:'1200',
					dataIndex:'Адрес',
					flex:1,
				},
				{
					text:'Телефон',
					width:'1200',
					dataIndex:'Телефон',
					flex:1,
				},
				{
					text:'Адрес сайта',
					width:'1200',
					dataIndex:'АдресСайта',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Данные.Справочники.НалоговыеОрганы").data,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/НалоговыеОрганы/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
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
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.Банки.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.Банки.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:831px;height:25px;',
			dock: 'top',
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
					text:'Удалить',
				},
				{
					text:'Установить пометку удаления',
				},
				{
					text:'',
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
				{
					text:'',
				},
				{
					text:'Изменить',
				},
				{
					text:'Установить пометку удаления',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Просмотр в виде дерева',
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
				{
					text:'Загрузить классификатор',
				},
				'-',
				{
					text:'Виды налоговых органов',
				},
			]
		},
	]
});