Ext.require(['Данные.Документы.КлассификацияПокупателейПоСтадиямВзаимоотношений'], function () 
{
	Ext.define('Документы.КлассификацияПокупателейПоСтадиямВзаимоотношений.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:780px;height:370px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Классификации покупателей по стадиям взаимоотношений',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'ДокументСписок',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:764px;height:329px;',
			height: 329,width: 764,
			columns:
			[
				{
					text:'',
					width:'32',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Дата',
					width:'132',
					dataIndex:'Дата',
					flex:1,
				},
				{
					text:'Номер',
					width:'80',
					dataIndex:'Номер',
					flex:1,
				},
				{
					text:'Дата окончания',
					width:'80',
					dataIndex:'ДатаОкончания',
					flex:1,
				},
				{
					text:'Периодичность',
					width:'80',
					dataIndex:'Периодичность',
					flex:1,
				},
				{
					text:'Количество периодов анализа',
					width:'60',
					dataIndex:'КоличествоПериодовАнализа',
					flex:1,
				},
				{
					text:'Разовый покупатель нач',
					width:'80',
					dataIndex:'РазовыйПокупательНач',
					flex:1,
				},
				{
					text:'Разовый покупатель кон',
					width:'80',
					dataIndex:'РазовыйПокупательКон',
					flex:1,
				},
				{
					text:'X класс нач',
					width:'80',
					dataIndex:'XКлассНач',
					flex:1,
				},
				{
					text:'X класс кон',
					width:'80',
					dataIndex:'XКлассКон',
					flex:1,
				},
				{
					text:'Y класс нач',
					width:'80',
					dataIndex:'YКлассНач',
					flex:1,
				},
				{
					text:'Y класс кон',
					width:'80',
					dataIndex:'YКлассКон',
					flex:1,
				},
				{
					text:'Z класс нач',
					width:'80',
					dataIndex:'ZКлассНач',
					flex:1,
				},
				{
					text:'Z класс кон',
					width:'80',
					dataIndex:'ZКлассКон',
					flex:1,
				},
				{
					text:'Комментарий',
					width:'160',
					dataIndex:'Комментарий',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/КлассификацияПокупателейПоСтадиямВзаимоотношений/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Картинка',
					},
					{
						name:'Дата',
					},
					{
						name:'Номер',
					},
					{
						name:'ДатаОкончания',
					},
					{
						name:'Периодичность',
					},
					{
						name:'КоличествоПериодовАнализа',
					},
					{
						name:'РазовыйПокупательНач',
					},
					{
						name:'РазовыйПокупательКон',
					},
					{
						name:'XКлассНач',
					},
					{
						name:'XКлассКон',
					},
					{
						name:'YКлассНач',
					},
					{
						name:'YКлассКон',
					},
					{
						name:'ZКлассНач',
					},
					{
						name:'ZКлассКон',
					},
					{
						name:'Комментарий',
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
						var грид = Ext.getCmp('ДокументСписок');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.КлассификацияПокупателейПоСтадиямВзаимоотношений.ФормаСпискаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.КлассификацияПокупателейПоСтадиямВзаимоотношений.ФормаСпискаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:780px;height:25px;',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'',
				},
				'-',
					]
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