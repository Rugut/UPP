Ext.require(['Данные.Документы.ДоговорНаВыполнениеРаботСФизЛицом'], function () 
{
	Ext.define('Документы.ДоговорНаВыполнениеРаботСФизЛицом.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	id: 'ФормаВыбора',
	style: 'position:absolute;width:676px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Договор на выполнение работ с физ. лицом',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		ПервоеОткрытие: true,
		items:
		[
		{
			id: 'ДокументСписок',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:660px;height:259px;',
			Привязка:
			{
				Горизонтальная: false,
				Вертикальная: false,
				ОбъектПривязки: 
				{
					Правая: { Элемент: 'Форма', Граница: 'Правая', Номер: 0, Координата: 0},
					Левая: { Элемент: '', Граница: 'Пустая', Номер: -1, Координата: 0},
					Верхняя: { Элемент: '', Граница: 'Пустая', Номер: -1, Координата: 0},
					Нижняя: { Элемент: 'Форма', Граница: 'Нижняя', Номер: 0, Координата: 0},
				},
				ОбъектПропорций: 
				{
					Правая: { Элемент: '', Граница: 'Пустая', Номер: -1, Координата: 0},
					Левая: { Элемент: '', Граница: 'Пустая', Номер: -1, Координата: 0},
					Верхняя: { Элемент: '', Граница: 'Пустая', Номер: -1, Координата: 0},
					Нижняя: { Элемент: '', Граница: 'Пустая', Номер: -1, Координата: 0},
				},
			},
			Высота:259,
			Ширина:660,
			Верх:33,
			Лево:8,
			height: 259,width: 660,
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
					text:'Организация',
					width:'120',
					dataIndex:'Организация',
					flex:1,
				},
				{
					text:'Физическое лицо',
					width:'120',
					dataIndex:'ФизЛицо',
					flex:1,
				},
				{
					text:'Подразделение',
					width:'120',
					dataIndex:'ПодразделениеОрганизации',
					flex:1,
				},
				{
					text:'Сумма за работу',
					width:'80',
					dataIndex:'СуммаЗаРаботу',
					flex:1,
				},
				{
					text:'Комментарий',
					width:'120',
					dataIndex:'Комментарий',
					flex:1,
				},
				{
					text:'Ответственный',
					width:'120',
					dataIndex:'Ответственный',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ДоговорНаВыполнениеРаботСФизЛицом/ВыбратьПоСсылке/100', timeout: 200},
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
						name:'Организация',
					},
					{
						name:'ФизЛицо',
					},
					{
						name:'ПодразделениеОрганизации',
					},
					{
						name:'СуммаЗаРаботу',
					},
					{
						name:'Комментарий',
					},
					{
						name:'Ответственный',
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
						Ext.require(['Справочники.ДоговорНаВыполнениеРаботСФизЛицом.ФормаВыбораСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ДоговорНаВыполнениеРаботСФизЛицом.ФормаВыбораСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			id: ДействияФормы,
			style: 'position:absolute;left:0px;top:0px;width:676px;height:25px;',
			Привязка:
			{
				Горизонтальная: false,
				Вертикальная: false,
				ОбъектПривязки: 
				{
					Правая: { Элемент: 'Форма', Граница: 'Правая', Номер: 0, Координата: 0},
					Левая: { Элемент: 'Форма', Граница: 'Левая', Номер: 0, Координата: 0},
					Верхняя: { Элемент: '', Граница: 'Пустая', Номер: -1, Координата: 0},
					Нижняя: { Элемент: 'ДействияФормы', Граница: 'Верхняя', Номер: 2, Координата: 0},
				},
				ОбъектПропорций: 
				{
					Правая: { Элемент: '', Граница: 'Пустая', Номер: -1, Координата: 0},
					Левая: { Элемент: '', Граница: 'Пустая', Номер: -1, Координата: 0},
					Верхняя: { Элемент: '', Граница: 'Пустая', Номер: -1, Координата: 0},
					Нижняя: { Элемент: '', Граница: 'Пустая', Номер: -1, Координата: 0},
				},
			},
			Высота:25,
			Ширина:676,
			Верх:0,
			Лево:0,
			width: 676,
			height: 25,
			items:
			[
				{
					id:'Действие',
					text:'Выбрать',
					tooltip:'Выбрать значение',
					iconCls:'x-Select',
				},
				'-',
				{
					xtype: 'splitbutton',
					id:'Подменю',
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
				'-',
				{
					text:'',
					tooltip:'',
				},
				{
					text:'',
					tooltip:'',
				},
				'-',
				{
					text:'Провести',
					tooltip:'Провести',
					iconCls:'x-Post',
				},
				{
					text:'Отмена проведения',
					tooltip:'Отмена проведения',
					iconCls:'x-UndoPosting',
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
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'Движения документа по регистрам',
					tooltip:'',
				},
				{
					text:'',
					tooltip:'',
				},
				'-',
				{
					text:'',
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
					id:'Действие1',
					text:'&Добавить',
					tooltip:'Добавить',
					iconCls:'x-copy',
				},
				{
					id:'Действие2',
					text:'',
					tooltip:'',
				},
				{
					id:'Действие3',
					text:'Изменить',
					tooltip:'Изменить текущий элемент',
					iconCls:'x-Change',
				},
				{
					id:'Действие4',
					text:'Установить пометку удаления',
					tooltip:'Установить пометку удаления',
				},
				'-',
				{
					id:'Действие5',
					text:'',
					tooltip:'',
				},
				{
					id:'Действие6',
					text:'',
					tooltip:'',
				},
				'-',
				{
					id:'Действие7',
					text:'Установить отбор и сортировку списка...',
					tooltip:'Отбор и сортировка',
					iconCls:'x-FilterAndSort',
				},
				{
					id:'Действие8',
					text:'Отбор по значению в текущей колонке',
					tooltip:'Отбор по значению в текущей колонке',
					iconCls:'x-FilterByCurrentValue',
				},
				{
					xtype: 'splitbutton',
					id:'Подменю1',
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
					id:'Действие9',
					text:'Отключить отбор',
					tooltip:'Отключить отбор',
					iconCls:'x-ClearFilter',
				},
				'-',
				{
					xtype: 'splitbutton',
					id:'Подменю2',
					text:'',
					menu: [
					]
				},
				'-',
				{
					id:'Действие10',
					text:'Обновить',
					tooltip:'Обновить текущий список',
					iconCls:'x-Refresh',
				},
				'-',
				{
					id:'Действие11',
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
	listeners:
	{
		resize:
		{
			fn: function (win, width, height, opt)
			{
				var форма = win.down('form');
				if (!форма.ПервоеОткрытие)
				{
					форма.items.each(function (item)
					{
					ПривязкаГраниц(item, item.ПозицияЭлемента);
					if (item.Групповой)
					{
						var элемент = Ext.getCmp(item.id).items.items[0].items.items;
						for (i = 0; i <= элемент.length -1; i += 1) 
						{
							var текЭлемент = элемент[i];
							ПривязкаГраниц(текЭлемент, текЭлемент.ПозицияЭлемента);
						}
					}
					});
				}
			}
		}
	}
});