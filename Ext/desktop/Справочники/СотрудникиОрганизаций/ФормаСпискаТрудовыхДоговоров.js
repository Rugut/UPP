Ext.require(['Данные.Справочники.СотрудникиОрганизаций'], function () 
{
	Ext.define('Справочники.СотрудникиОрганизаций.ФормаСпискаТрудовыхДоговоров',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:707px;height:361px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Трудовые договоры',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'СправочникСписок',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:57px;width:691px;height:296px;',
			height: 296,width: 691,
			columns:
			[
				{
					text:'',
					width:'33',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Дата',
					width:'80',
					dataIndex:'ДатаДоговора',
					flex:1,
				},
				{
					text:'Номер',
					width:'80',
					dataIndex:'НомерДоговора',
					flex:1,
				},
				{
					text:'Организация',
					width:'120',
					dataIndex:'ОбособленноеПодразделение',
					flex:1,
				},
				{
					text:'Сотрудник',
					width:'120',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Подразделение',
					width:'120',
					dataIndex:'ПодразделениеОрганизации',
					flex:1,
				},
				{
					text:'Должность',
					width:'120',
					dataIndex:'Должность',
					flex:1,
				},
				{
					text:'Дата начала',
					width:'84',
					dataIndex:'ДатаНачала',
					flex:1,
				},
				{
					text:'Дата окончания',
					width:'84',
					dataIndex:'ДатаОкончания',
					flex:1,
				},
				{
					text:'Испытательный срок',
					width:'113',
					dataIndex:'ИспытательныйСрок',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Данные.Справочники.СотрудникиОрганизаций").data,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/СотрудникиОрганизаций/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
					{
						name:'Картинка',
					},
					{
						name:'ДатаДоговора',
					},
					{
						name:'НомерДоговора',
					},
					{
						name:'ОбособленноеПодразделение',
					},
					{
						name:'Наименование',
					},
					{
						name:'ПодразделениеОрганизации',
					},
					{
						name:'Должность',
					},
					{
						name:'ДатаНачала',
					},
					{
						name:'ДатаОкончания',
					},
					{
						name:'ИспытательныйСрок',
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
						Ext.require(['Справочники.СотрудникиОрганизаций.ФормаСпискаТрудовыхДоговоровСобытия'], function ()
						{
							var obj = Ext.create("Справочники.СотрудникиОрганизаций.ФормаСпискаТрудовыхДоговоровСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Организация',
			width: 220,
			height: 19,
			style: 'position:absolute;left:97px;top:33px;width:220px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Организация:',
			style: 'position:absolute;left:8px;top:33px;width:87px;height:19px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:707px;height:25px;',
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
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'(Ввести на основании)',
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
					text:'&Добавить (Новый сотрудник)',
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
				{
					text:'Печать',
				},
			]
		},
	]
	});
});