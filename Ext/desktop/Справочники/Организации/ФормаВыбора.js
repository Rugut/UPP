Ext.define('Справочники.Организации.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:503px;height:321px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Организации',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:487px;height:280px;',
			height: 280,width: 487,
			columns:
			[
				{
					text:'',
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
					text:'Префикс',
					width:'60',
					dataIndex:'Префикс',
					flex:1,
				},
				{
					text:'Наименование',
					width:'220',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'ИНН',
					width:'84',
					dataIndex:'ИНН',
					flex:1,
				},
				{
					text:'КПП',
					width:'63',
					dataIndex:'КПП',
					flex:1,
				},
				{
					text:'Регистрационный номер ПФР',
					width:'98',
					dataIndex:'РегистрационныйНомерПФР',
					flex:1,
				},
				{
					text:'Головная организация',
					width:'350',
					dataIndex:'ГоловнаяОрганизация',
					flex:1,
				},
				{
					text:'Полное наименование',
					width:'100',
					dataIndex:'НаименованиеПолное',
					flex:1,
				},
				{
					text:'Код по ОКПО',
					width:'70',
					dataIndex:'КодПоОКПО',
					flex:1,
				},
				{
					text:'Код по ОКАТО',
					width:'77',
					dataIndex:'КодПоОКАТО',
					flex:1,
				},
				{
					text:'Код ИФНС',
					width:'28',
					dataIndex:'КодИМНС',
					flex:1,
				},
				{
					text:'Юр. / физ. лицо',
					width:'100',
					dataIndex:'ЮрФизЛицо',
					flex:1,
				},
				{
					text:'Районный коэффициент',
					width:'49',
					dataIndex:'РайонныйКоэффициент',
					flex:1,
				},
				{
					text:'Районный коэффициент РФ',
					width:'49',
					dataIndex:'РайонныйКоэффициентРФ',
					flex:1,
				},
				{
					text:'Территориальные условия ПФР',
					width:'21',
					dataIndex:'ТерриториальныеУсловияПФР',
					flex:1,
				},
				{
					text:'Основной банковский счет',
					width:'350',
					dataIndex:'ОсновнойБанковскийСчет',
					flex:1,
				},
				{
					text:'Вид ставок ЕСН и ПФР',
					width:'100',
					dataIndex:'ВидСтавокЕСНиПФР',
					flex:1,
				},
				{
					text:'Наименование плательщика при перечислении налогов',
					width:'350',
					dataIndex:'НаименованиеПлательщикаПриПеречисленииНалогов',
					flex:1,
				},
				{
					text:'Отражать в регламентированном учете',
					width:'70',
					dataIndex:'ОтражатьВРегламентированномУчете',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/Организации/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Картинка',
					},
					{
						name:'Код',
					},
					{
						name:'Префикс',
					},
					{
						name:'Наименование',
					},
					{
						name:'ИНН',
					},
					{
						name:'КПП',
					},
					{
						name:'РегистрационныйНомерПФР',
					},
					{
						name:'ГоловнаяОрганизация',
					},
					{
						name:'НаименованиеПолное',
					},
					{
						name:'КодПоОКПО',
					},
					{
						name:'КодПоОКАТО',
					},
					{
						name:'КодИМНС',
					},
					{
						name:'ЮрФизЛицо',
					},
					{
						name:'РайонныйКоэффициент',
					},
					{
						name:'РайонныйКоэффициентРФ',
					},
					{
						name:'ТерриториальныеУсловияПФР',
					},
					{
						name:'ОсновнойБанковскийСчет',
					},
					{
						name:'ВидСтавокЕСНиПФР',
					},
					{
						name:'НаименованиеПлательщикаПриПеречисленииНалогов',
					},
					{
						name:'ОтражатьВРегламентированномУчете',
					},
				]
			},
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:503px;height:25px;',
			dock: 'top',
			items:
			[
				{
					text:'Выбрать',
				},
				'-',
			]
		},
	]
});