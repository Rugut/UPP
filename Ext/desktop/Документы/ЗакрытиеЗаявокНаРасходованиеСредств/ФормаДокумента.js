Ext.define('Документы.ЗакрытиеЗаявокНаРасходованиеСредств.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:672px;height:433px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Закрытие заявок на расходование средств',
	
	items:
	[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:98px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'от:',
			style: 'position:absolute;left:180px;top:33px;width:16px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:198px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Ответственный:',
			style: 'position:absolute;left:8px;top:354px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:98px;top:354px;width:220px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:142px;width:656px;height:24px;',
			items:
			[
				{
					text:'Заполнить',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:166px;width:656px;height:180px;',
			height: 180,width: 656,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Заявка',
					width:'220',
				},
				{
					text:'Контрагент',
					width:'120',
				},
				{
					text:'Сумма расчетов',
					width:'100',
				},
				{
					text:'Валюта остатка',
					width:'98',
				},
				{
					text:'Остаток резерва',
					width:'108',
				},
				{
					text:'Остаток размещение',
					width:'108',
				},
				{
					text:'Ответственный',
					width:'95',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:672px;height:25px;',
			items:
			[
				'-',
				'-',
				{
					text:'',
				},
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'',
				},
				{
					text:'Структура подчиненности документа',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:408px;width:672px;height:25px;',
			items:
			[
				{
					text:'OK',
				},
				{
					text:'Закрыть',
				},
				'-',
				'-',
				'-',
				{
					text:'Записать',
				},
				{
					text:'Печать',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Подразделение',
			style: 'position:absolute;left:444px;top:78px;width:220px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Подразделение:',
			style: 'position:absolute;left:338px;top:78px;width:104px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Контрагент',
			style: 'position:absolute;left:98px;top:102px;width:220px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Контрагент:',
			style: 'position:absolute;left:14px;top:102px;width:82px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтветственныйЗаявка',
			style: 'position:absolute;left:444px;top:102px;width:220px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Ответственный:',
			style: 'position:absolute;left:338px;top:102px;width:104px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВвода2',
			style: 'position:absolute;left:444px;top:354px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Состояние:',
			style: 'position:absolute;left:338px;top:354px;width:104px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВвода3',
			style: 'position:absolute;left:98px;top:381px;width:566px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:381px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'Дата расхода с:',
			style: 'position:absolute;left:14px;top:78px;width:82px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтборДатаНач',
			style: 'position:absolute;left:98px;top:78px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись37',
			text: 'по:',
			style: 'position:absolute;left:188px;top:78px;width:16px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтборДатаКон',
			style: 'position:absolute;left:207px;top:78px;width:88px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:298px;top:78px;width:20px;height:19px;',
		},
	]
});