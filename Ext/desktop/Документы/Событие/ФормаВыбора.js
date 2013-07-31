Ext.require(['Данные.Документы.Событие'], function () 
{
	Ext.define('Документы.Событие.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:680px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'События',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'ДокументСписок',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:664px;height:259px;',
			height: 259,width: 664,
			columns:
			[
				{
					text:'',
					width:'20',
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
					text:'Тип события',
					width:'100',
					dataIndex:'ТипСобытия',
					flex:1,
				},
				{
					text:'Вид события',
					width:'100',
					dataIndex:'ВидСобытия',
					flex:1,
				},
				{
					text:'Группа события',
					width:'120',
					dataIndex:'ГруппаСобытия',
					flex:1,
				},
				{
					text:'Контрагент',
					width:'180',
					dataIndex:'Контрагент',
					flex:1,
				},
				{
					text:'Ответственный',
					width:'120',
					dataIndex:'Ответственный',
					flex:1,
				},
				{
					text:'Напомнить о событии',
					width:'54',
					dataIndex:'НапомнитьОСобытии',
					flex:1,
				},
				{
					text:'Время напоминания',
					width:'132',
					dataIndex:'ВремяНапоминания',
					flex:1,
				},
				{
					text:'Важность',
					width:'80',
					dataIndex:'Важность',
					flex:1,
				},
				{
					text:'Состояние события',
					width:'100',
					dataIndex:'СостояниеСобытия',
					flex:1,
				},
				{
					text:'Территория',
					width:'120',
					dataIndex:'Территория',
					flex:1,
				},
				{
					text:'Помещение',
					width:'120',
					dataIndex:'Помещение',
					flex:1,
				},
				{
					text:'Начало события',
					width:'80',
					dataIndex:'НачалоСобытия',
					flex:1,
				},
				{
					text:'Вид объекта',
					width:'120',
					dataIndex:'ВидОбъекта',
					flex:1,
				},
				{
					text:'Проект',
					width:'120',
					dataIndex:'Проект',
					flex:1,
				},
				{
					text:'Комментарий',
					width:'220',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/Событие/ВыбратьПоСсылке/100', timeout: 200},
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
						name:'ТипСобытия',
					},
					{
						name:'ВидСобытия',
					},
					{
						name:'ГруппаСобытия',
					},
					{
						name:'Контрагент',
					},
					{
						name:'Ответственный',
					},
					{
						name:'НапомнитьОСобытии',
					},
					{
						name:'ВремяНапоминания',
					},
					{
						name:'Важность',
					},
					{
						name:'СостояниеСобытия',
					},
					{
						name:'Территория',
					},
					{
						name:'Помещение',
					},
					{
						name:'НачалоСобытия',
					},
					{
						name:'ВидОбъекта',
					},
					{
						name:'Проект',
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
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.Событие.ФормаВыбораСобытия'], function ()
						{
							var obj = Ext.create("Справочники.Событие.ФормаВыбораСобытия");
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
			style: 'position:absolute;left:0px;top:0px;width:680px;height:25px;',
			dock: 'top',
			items:
			[
				{
					text:'Выбрать',
				},
				'-',
				{
					xtype: 'splitbutton',
					text:'Перейти',
					menu: [
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'Структура подчиненности документа',
				},
				'-',
					]
				},
			]
		},
	]
	});
});