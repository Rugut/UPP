Ext.define('Справочники.ТипыЦенНоменклатуры.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:702px;height:321px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Типы цен номенклатуры',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:686px;height:280px;',
			height: 280,width: 686,
			columns:
			[
				{
					text:' ',
					width:'32',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Код',
					width:'40',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Наименование',
					width:'180',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Валюта цен',
					width:'80',
					dataIndex:'ВалютаЦены',
					flex:1,
				},
				{
					text:'Расчет цен',
					width:'80',
					dataIndex:'Рассчитывается',
					flex:1,
				},
				{
					text:'Базовый тип цен',
					width:'200',
					dataIndex:'БазовыйТипЦен',
					flex:1,
				},
				{
					text:'Наценка в %',
					width:'80',
					dataIndex:'ПроцентСкидкиНаценки',
					flex:1,
				},
				{
					text:'НДС',
					width:'80',
					dataIndex:'ЦенаВключаетНДС',
					flex:1,
				},
				{
					text:'Округлять до',
					width:'80',
					dataIndex:'ПорядокОкругления',
					flex:1,
				},
				{
					text:'Метод округления',
					width:'150',
					dataIndex:'ОкруглятьВБольшуюСторону',
					flex:1,
				},
				{
					text:'Способ расчета цены',
					width:'150',
					dataIndex:'СпособРасчетаЦены',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ТипыЦенНоменклатуры/ВыбратьПоСсылке/100'},
				fields:
				[
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
						name:'ВалютаЦены',
					},
					{
						name:'Рассчитывается',
					},
					{
						name:'БазовыйТипЦен',
					},
					{
						name:'ПроцентСкидкиНаценки',
					},
					{
						name:'ЦенаВключаетНДС',
					},
					{
						name:'ПорядокОкругления',
					},
					{
						name:'ОкруглятьВБольшуюСторону',
					},
					{
						name:'СпособРасчетаЦены',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:702px;height:25px;',
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
				{
					text:'',
				},
				'-',
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
				{
					text:'',
				},
				'-',
				{
					text:'',
				},
				{
					text:'',
				},
				{
					text:'',
				},
				{
					text:'',
				},
				'-',
				'-',
				'-',
				'-',
				{
					text:'',
				},
				'-',
				'-',
				'-',
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
					text:'',
				},
				{
					text:'',
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
				{
					text:'(Список отборов)',
				},
				'-',
				{
					text:'(История отборов)',
				},
				'-',
				'-',
				'-',
				'-',
				'-',
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
					text:'',
					menu: [
				{
					text:'',
				},
					]
				},
				'-',
				{
					text:'Прайс-лист',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
	]
});