Ext.require(['Данные.Справочники.ПроизвольныеОтчеты'], function () 
{
	Ext.define('Справочники.ПроизвольныеОтчеты.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:665px;height:382px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Произвольные отчеты',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'СправочникСписок',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:443px;height:305px;',
			height: 305,width: 443,
			columns:
			[
				{
					text:'Наименование отчета',
					width:'304',
					dataIndex:'Наименование',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Данные.Справочники.ПроизвольныеОтчеты").data,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПроизвольныеОтчеты/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
					{
						name:'Наименование',
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
						Ext.require(['Справочники.ПроизвольныеОтчеты.ФормаСпискаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ПроизвольныеОтчеты.ФормаСпискаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			id: 'СписокСохраненныеНастройки',
			xtype: 'grid',
			style: 'position:absolute;left:457px;top:33px;width:200px;height:305px;',
			height: 305,width: 200,
			columns:
			[
				{
					text:'Вариант отчета',
					width:'161',
					dataIndex:'Ссылка',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Данные.Справочники.ПроизвольныеОтчеты").data,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПроизвольныеОтчеты/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
					{
						name:'Ссылка',
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
						var грид = Ext.getCmp('СписокСохраненныеНастройки');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.ПроизвольныеОтчеты.ФормаСпискаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ПроизвольныеОтчеты.ФормаСпискаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			name: 'НадписьОписание',
			text: '',
			style: 'position:absolute;left:66px;top:343px;width:591px;height:31px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОписание1',
			text: 'Описание:',
			style: 'position:absolute;left:8px;top:343px;width:56px;height:19px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:665px;height:25px;',
			dock: 'top',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Действия',
					menu: [
				{
					text:'&Добавить',
				},
				{
					text:'Новая группа',
				},
				{
					text:'&Скопировать',
				},
				{
					text:'&Изменить',
				},
				{
					text:'&Удалить',
				},
				{
					text:'Установить пометку удаления',
				},
				{
					text:'Переместить в группу',
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
					text:'История отборов',
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
					text:'Сортировка',
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
					text:'Новая группа',
				},
				{
					text:'&Скопировать',
				},
				{
					text:'&Изменить',
				},
				{
					text:'Установить пометку удаления',
				},
				{
					text:'Переместить в группу',
				},
				'-',
				{
					text:'Установить отбор и сор��ировку списка...',
				},
				{
					text:'Отбор по значению в текущей колонке',
				},
				{
					xtype: 'splitbutton',
					text:'История отборов',
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
					text:'Общая настройка отчета',
				},
				'-',
				'-',
				{
					text:'Справка',
				},
			]
		},
	]
	});
});