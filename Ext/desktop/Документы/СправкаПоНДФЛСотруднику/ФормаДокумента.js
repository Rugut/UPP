Ext.define('Документы.СправкаПоНДФЛСотруднику.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 600,width: 742,
	iconCls: 'bogus',
	title: 'Справка о доходах (2-НДФЛ) для сотрудника',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:450px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:550px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:114px;top:33px;width:220px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:575px;width:742px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Записать',
				},
				{
					text:'Закрыть',
				},
				{
					text:'ОК',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:450px;top:58px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:114px;top:550px;width:620px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НалоговыйПериод',
			style: 'position:absolute;left:114px;top:58px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Телефон',
			style: 'position:absolute;left:574px;top:526px;width:160px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДолжностьПодписавшегоЛица',
			style: 'position:absolute;left:352px;top:526px;width:160px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:742px;height:25px;',
			items:
			[
				{
					text:'Подменю1',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'РедактироватьКодНомер',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие2',
				},
				{
					text:'Подменю',
				},
				{
					text:'Действие3',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ДействиеОткрытьКатегории1',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие',
				},
				{
					text:'Подменю',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие6',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие3',
				},
				{
					text:'ДействиеОткрытьСвойства1',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие7',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Разделитель4',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КодПоОКАТО',
			style: 'position:absolute;left:599px;top:147px;width:135px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СправкуПодписал',
			style: 'position:absolute;left:114px;top:526px;width:160px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:204px;width:726px;height:318px;',
			height: 318,width: 726,
			items:
			[
				{
					title:'Разделы3_5',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:28px;width:390px;height:138px;',
			height: 138,width: 390,
			columns:
			[
				{
					text:'Месяц',
				},
				{
					text:'КодДохода',
				},
				{
					text:'СуммаДохода',
				},
				{
					text:'КодВычета',
				},
				{
					text:'СуммаВычета',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:405px;top:28px;width:313px;height:91px;',
			height: 91,width: 313,
			columns:
			[
				{
					text:'КодВычета',
				},
				{
					text:'СуммаВычета',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаУведомления',
			style: 'position:absolute;left:503px;top:147px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерУведомления',
			style: 'position:absolute;left:420px;top:147px;width:60px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КодНалоговогоОрганаУведомления',
			style: 'position:absolute;left:648px;top:147px;width:60px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаОбновитьДанныеОДоходах',
			text: 'Обновить',
			style: 'position:absolute;left:6px;top:272px;width:82px;height:21px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:172px;width:712px;height:94px;',
			height: 94,width: 712,
			items:
			[
				{
					title:'Страница2010',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Исчислено',
			style: 'position:absolute;left:272px;top:25px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Удержано',
			style: 'position:absolute;left:272px;top:50px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Перечислено',
			style: 'position:absolute;left:473px;top:50px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОбщаяСуммаДохода',
			style: 'position:absolute;left:68px;top:25px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОблагаемаяСуммаДохода',
			style: 'position:absolute;left:68px;top:50px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Задолженность',
			style: 'position:absolute;left:272px;top:75px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИзлишнеУдержано',
			style: 'position:absolute;left:473px;top:25px;width:80px;height:19px;',
		},
					]
				},
				{
					title:'Страница2011',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:0px;width:82px;height:94px;',
			height: 94,width: 82,
			columns:
			[
				{
					text:'Ставка',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Перечислено1',
			style: 'position:absolute;left:535px;top:50px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИзлишнеУдержано1',
			style: 'position:absolute;left:535px;top:25px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Удержано1',
			style: 'position:absolute;left:348px;top:50px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Задолженность1',
			style: 'position:absolute;left:348px;top:75px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Исчислено1',
			style: 'position:absolute;left:348px;top:25px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОблагаемаяСуммаДохода1',
			style: 'position:absolute;left:162px;top:50px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОбщаяСуммаДохода1',
			style: 'position:absolute;left:162px;top:25px;width:80px;height:19px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'Раздел2',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Фамилия',
			style: 'position:absolute;left:94px;top:6px;width:180px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Имя',
			style: 'position:absolute;left:322px;top:6px;width:160px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Отчество',
			style: 'position:absolute;left:558px;top:6px;width:160px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'АдресРФВФорме',
			style: 'position:absolute;left:94px;top:106px;width:624px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидДокумента',
			style: 'position:absolute;left:94px;top:182px;width:624px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СерияДокумента',
			style: 'position:absolute;left:94px;top:207px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерДокумента',
			style: 'position:absolute;left:242px;top:207px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'АдресЗарубежомВФорме',
			style: 'position:absolute;left:160px;top:131px;width:558px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Гражданство',
			style: 'position:absolute;left:94px;top:56px;width:624px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаРождения',
			style: 'position:absolute;left:94px;top:31px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИНН',
			style: 'position:absolute;left:242px;top:31px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтатусНалогоплательщика',
			style: 'position:absolute;left:94px;top:81px;width:624px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаОбновитьДанныеСотрудника',
			text: 'Обновить',
			style: 'position:absolute;left:6px;top:272px;width:82px;height:21px;',
		},
					]
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Сотрудник',
			style: 'position:absolute;left:114px;top:83px;width:220px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:383px;top:136px;width:141px;height:30px;',
			height: 30,width: 141,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ставка',
			style: 'position:absolute;left:50px;top:11px;width:82px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КодИФНС',
			style: 'position:absolute;left:274px;top:58px;width:60px;height:19px;',
		},
	]
});