Ext.define('Документы.КлассификацияПокупателейПоСтадиямВзаимоотношений.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:660px;height:430px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Классификация покупателей по стадиям взаимоотношений',
	
	items:
	[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:50px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:62px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'от:',
			style: 'position:absolute;left:142px;top:33px;width:20px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:162px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:660px;height:25px;',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'',
				},
				'-',
					]
				},
				'-',
				{
					text:'',
				},
				{
					text:'',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:405px;width:660px;height:25px;',
			items:
			[
				{
					text:'Печать',
				},
				'-',
				{
					text:'OK',
				},
				'-',
				{
					text:'Записать',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:58px;width:644px;height:290px;',
			height: 290,width: 644,
			items:
			[
				{
					title:'Распределение',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Дата окончания:',
			style: 'position:absolute;left:439px;top:6px;width:96px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОкончания',
			style: 'position:absolute;left:537px;top:6px;width:99px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Периодичность:',
			style: 'position:absolute;left:6px;top:6px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Периодичность',
			style: 'position:absolute;left:97px;top:6px;width:124px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'Количество периодов:',
			style: 'position:absolute;left:232px;top:6px;width:118px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КоличествоПериодов',
			style: 'position:absolute;left:358px;top:6px;width:66px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:32px;width:630px;height:24px;',
			items:
			[
				{
					text:'',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:56px;width:630px;height:208px;',
			height: 208,width: 630,
			columns:
			[
				{
					text:'N',
					width:'25',
				},
				{
					text:'Стадия взаимоотношений',
					width:'81',
				},
				{
					text:'XYZ-класс',
					width:'70',
				},
				{
					text:'Контрагент',
					width:'144',
				},
				{
					text:'Коэф. вариации',
					width:'100',
				},
				{
					text:'Параметр (значение)',
					width:'112',
				},
				{
					text:'Параметр (%)',
					width:'74',
				},
				{
					text:'Менеджер контрагента',
					width:'122',
				},
				{
					text:'Стадия взаимоотношений старая',
					width:'100',
				},
				{
					text:'XYZ -классификация старая',
					width:'100',
				},
			]
		},
					]
				},
				{
					title:'Параметры',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'Разовый покупатель (количество покупок):',
			style: 'position:absolute;left:24px;top:74px;width:234px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'РазовыйПокупательНач',
			style: 'position:absolute;left:109px;top:98px;width:86px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'РазовыйПокупательКон',
			style: 'position:absolute;left:227px;top:98px;width:86px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись8',
			text: 'X-класс с:',
			style: 'position:absolute;left:41px;top:154px;width:60px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'XКлассНач',
			style: 'position:absolute;left:109px;top:154px;width:86px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'XКлассКон',
			style: 'position:absolute;left:227px;top:154px;width:86px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись10',
			text: 'Y-класс с:',
			style: 'position:absolute;left:41px;top:179px;width:60px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'YКлассНач',
			style: 'position:absolute;left:109px;top:179px;width:86px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'YКлассКон',
			style: 'position:absolute;left:227px;top:179px;width:86px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись12',
			text: 'Z-класс с:',
			style: 'position:absolute;left:41px;top:204px;width:60px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ZКлассНач',
			style: 'position:absolute;left:109px;top:204px;width:86px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ZКлассКон',
			style: 'position:absolute;left:227px;top:204px;width:86px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПараметраРаспределения',
			text: 'ПараметрРаспределения',
			style: 'position:absolute;left:23px;top:27px;width:613px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись14',
			text: 'по:',
			style: 'position:absolute;left:202px;top:98px;width:18px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись15',
			text: 'Постоянный покупатель (относительный коэффициент вариации):',
			style: 'position:absolute;left:24px;top:130px;width:339px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись16',
			text: 'по:',
			style: 'position:absolute;left:202px;top:154px;width:18px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись17',
			text: 'по:',
			style: 'position:absolute;left:202px;top:179px;width:18px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись18',
			text: 'по:',
			style: 'position:absolute;left:202px;top:204px;width:18px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись20',
			text: 'с:',
			style: 'position:absolute;left:83px;top:98px;width:18px;height:19px;text-align:left;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись19',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:378px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:378px;width:556px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:8px;top:354px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:96px;top:354px;width:556px;height:19px;',
		},
	]
});