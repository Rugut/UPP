Ext.require(['Данные.Справочники.МедицинскиеСтраховыеПолисы'], function () 
{
	Ext.define('Справочники.МедицинскиеСтраховыеПолисы.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:901px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Медицинские страховые полисы',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'СправочникСписок',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:885px;height:259px;',
			height: 259,width: 885,
			columns:
			[
				{
					text:'',
					width:'32',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Физлицо',
					width:'120',
					dataIndex:'Физлицо.Представление',
					flex:1,
				},
				{
					text:'Организация',
					width:'100',
					dataIndex:'Организация.Представление',
					flex:1,
				},
				{
					text:'Серия',
					width:'80',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Номер',
					width:'132',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Вид страхования',
					width:'100',
					dataIndex:'ВидСтрахования.Представление',
					flex:1,
				},
				{
					text:'Дата окончания полиса',
					width:'80',
					dataIndex:'ДатаОкончанияПолиса',
					flex:1,
				},
				{
					text:'Программа страхования',
					width:'120',
					dataIndex:'ПрограммаСтрахования.Представление',
					flex:1,
				},
				{
					text:'Родственник',
					width:'120',
					dataIndex:'Родственник',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.МедицинскиеСтраховыеПолисы").data,
					fields: ['Картинка','Физлицо.Представление','Организация.Представление','Код','Наименование','ВидСтрахования.Представление','ДатаОкончанияПолиса','ПрограммаСтрахования.Представление','Родственник',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/МедицинскиеСтраховыеПолисы/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Картинка',
					},
					{
						name:'Физлицо',
					},
					{
						name:'Организация',
					},
					{
						name:'Код',
					},
					{
						name:'Наименование',
					},
					{
						name:'ВидСтрахования',
					},
					{
						name:'ДатаОкончанияПолиса',
					},
					{
						name:'ПрограммаСтрахования',
					},
					{
						name:'Родственник',
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
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.МедицинскиеСтраховыеПолисы.ФормаСпискаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.МедицинскиеСтраховыеПолисы.ФормаСпискаСобытия");
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
			style: 'position:absolute;left:0px;top:0px;width:901px;height:25px;',
			dock: 'top',
			items:
			[
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
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
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
			]
		},
	]
	});
});