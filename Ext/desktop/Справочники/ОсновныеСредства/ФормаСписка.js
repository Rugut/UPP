Ext.define('Справочники.ОсновныеСредства.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:677px;height:361px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Основные средства',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:174px;top:33px;width:495px;height:320px;',
			height: 320,width: 495,
			columns:
			[
				{
					text:'',
					width:'32',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Инв. №',
					width:'80',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Наименование',
					width:'220',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Полное наименование',
					width:'280',
					dataIndex:'НаименованиеПолное',
					flex:1,
				},
				{
					text:'Изготовитель',
					width:'100',
					dataIndex:'Изготовитель',
					flex:1,
				},
				{
					text:'Номер паспорта (регистрационный)',
					width:'100',
					dataIndex:'НомерПаспорта',
					flex:1,
				},
				{
					text:'Заводской номер',
					width:'100',
					dataIndex:'ЗаводскойНомер',
					flex:1,
				},
				{
					text:'Дата выпуска (постройки)',
					width:'84',
					dataIndex:'ДатаВыпуска',
					flex:1,
				},
				{
					text:'Код по ОКОФ',
					width:'70',
					dataIndex:'КодПоОКОФ',
					flex:1,
				},
				{
					text:'Амортизационная группа',
					width:'100',
					dataIndex:'АмортизационнаяГруппа',
					flex:1,
				},
				{
					text:'Группа ОС',
					width:'100',
					dataIndex:'ГруппаОС',
					flex:1,
				},
				{
					text:'Признак автотранспорта',
					width:'70',
					dataIndex:'Автотранспорт',
					flex:1,
				},
				{
					text:'Комментарий',
					width:'100',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ОсновныеСредства/ВыбратьПоСсылке/100'},
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
						name:'НаименованиеПолное',
					},
					{
						name:'Изготовитель',
					},
					{
						name:'НомерПаспорта',
					},
					{
						name:'ЗаводскойНомер',
					},
					{
						name:'ДатаВыпуска',
					},
					{
						name:'КодПоОКОФ',
					},
					{
						name:'АмортизационнаяГруппа',
					},
					{
						name:'ГруппаОС',
					},
					{
						name:'Автотранспорт',
					},
					{
						name:'Комментарий',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:677px;height:25px;',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Действия',
					menu: [
					]
				},
				{
					xtype: 'splitbutton',
					text:'Перейти',
					menu: [
				{
					text:'Зарегистрированные оплаты основных средств (УСН)',
				},
				'-',
					]
				},
				{
					text:'Свойства',
				},
				{
					text:'Категории',
				},
				'-',
				'-',
				{
					text:'Групповое добавление',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:160px;height:320px;',
			height: 320,width: 160,
			columns:
			[
				{
					text:'Наименование',
					width:'160',
					dataIndex:'Наименование',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ОсновныеСредства/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Наименование',
					},
				]
			},
		},
	]
});