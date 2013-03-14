Ext.define('Справочники.Номенклатура.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:733px;height:349px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Номенклатура',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:733px;height:25px;',
			items:
			[
				{
					text:'Выбрать',
				},
				'-',
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
					text:'Установить пометку удаления',
				},
				'-',
				{
					text:'Иерархический просмотр',
				},
				{
					text:'Переместить в группу',
				},
				{
					text:'Уровень вверх',
				},
				{
					text:'Уровень вниз',
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
				'-',
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
				'-',
				{
					text:'Номенклатура контрагента',
				},
				{
					text:'Остатки товаров на складах',
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
				'-',
				{
					text:'Иерархический просмотр',
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
					]
				},
				{
					text:'Отключить отбор',
				},
				'-',
				{
					text:'Обновить',
				},
				{
					xtype: 'splitbutton',
					text:'Перейти',
					menu: [
				{
					text:'',
				},
				{
					text:'',
				},
				{
					text:'',
				},
					]
				},
				'-',
				{
					text:'Справка',
				},
				'-',
				{
					text:'Поиск по штрихкоду',
				},
				'-',
				{
					text:'Изображение',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:717px;height:306px;',
			height: 306,width: 717,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'ВыборНоменклатуры',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:166px;top:25px;width:551px;height:130px;',
			height: 130,width: 551,
			columns:
			[
				{
					text:'',
					width:'39',
				},
				{
					text:'Код',
					width:'40',
				},
				{
					text:'Артикул ',
					width:'60',
				},
				{
					text:'Наименование',
					width:'220',
				},
				{
					text:'Вид номенклатуры',
					width:'110',
				},
				{
					text:'Базовая',
					width:'54',
				},
				{
					text:'Единица',
					width:'54',
				},
				{
					text:'Ставка НДС',
					width:'80',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:25px;width:160px;height:130px;',
			height: 130,width: 160,
			columns:
			[
				{
					text:'Наименование',
					width:'80',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:161px;width:160px;height:144px;',
			height: 144,width: 160,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:166px;top:161px;width:551px;height:144px;',
			height: 144,width: 551,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:152px;top:21px;width:399px;height:99px;',
			height: 99,width: 399,
			columns:
			[
				{
					text:'Характеристика/Склад',
					width:'151',
				},
				{
					text:'Ячейка склада',
					width:'87',
				},
				{
					text:'Общий',
					width:'60',
				},
				{
					text:'Свободный',
					width:'71',
				},
				{
					text:'Своб.ожид.',
					width:'68',
				},
				{
					text:'В резерве',
					width:'75',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:21px;width:147px;height:123px;',
			height: 123,width: 147,
			columns:
			[
				{
					text:'Типы цен',
					width:'133',
				},
				{
					text:'Ссылка',
					width:'82',
				},
				{
					text:'БазовыйТипЦен',
					width:'100',
				},
				{
					text:'Рассчитывается',
					width:'100',
				},
				{
					text:'ОкруглятьВБольшуюСторону',
					width:'100',
				},
				{
					text:'ПроцентСкидкиНаценки',
					width:'100',
				},
				{
					text:'Префикс',
					width:'100',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВалютаЦены',
			style: 'position:absolute;left:418px;top:125px;width:133px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВалютаЦены',
			text: 'Валюта:',
			style: 'position:absolute;left:370px;top:125px;width:46px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьТипРасчета',
			text: 'Валюта цены:',
			style: 'position:absolute;left:154px;top:125px;width:73px;height:19px;text-align:left;',
		},
					]
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗначениеОтбораСпискаНоменклатуры',
			style: 'position:absolute;left:228px;top:0px;width:489px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:292px;top:64px;width:157px;height:24px;',
			items:
			[
				{
					text:'Пометить все типы цен',
				},
				{
					text:'Отменить пометку всех типов цен',
				},
				{
					text:'Обновить',
				},
				'-',
				{
					text:'&Переместить вверх',
				},
				{
					text:'Переместить вниз',
				},
			]
		},
					]
				},
				{
					title:'ВыборНоменклатурыКонтрагента',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:186px;top:0px;width:531px;height:305px;',
			height: 305,width: 531,
			columns:
			[
				{
					text:'',
					width:'28',
				},
				{
					text:'Артикул',
					width:'86',
				},
				{
					text:'Номенклатура',
					width:'242',
				},
				{
					text:'Наименование номенклатуры контрагента',
					width:'139',
				},
				{
					text:'Код номенклатуры контрагента',
					width:'157',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:0px;width:180px;height:305px;',
			height: 305,width: 180,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
					]
				},
			]
		},
					]
				},
			]
		},
	]
});