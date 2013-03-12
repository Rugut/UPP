Ext.define('Документы.ПереносПроводокМеждународный.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:654px;height:379px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: '',
	
	items:
	[
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:327px;width:84px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:94px;top:327px;width:552px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:85px;width:468px;height:24px;',
			items:
			[
				{
					text:'Установить отбор и сортировку списка',
				},
				'-',
				{
					text:'Выполнить перенос проводок',
				},
				{
					text:'Вывести список',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:654px;height:25px;',
			items:
			[
				{
					text:'',
				},
				{
					text:'Открыть соответствия счетов',
				},
				{
					text:'Открыть исключения проводок',
				},
				{
					text:'Движения документа по регистрам',
				},
				'-',
				'-',
				{
					text:'',
				},
				'-',
				{
					text:'Структура подчиненности документа',
				},
				'-',
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:354px;width:654px;height:25px;',
			items:
			[
				'-',
				{
					text:'Печать',
				},
				{
					text:'Закрыть',
				},
				'-',
				'-',
				{
					text:'OK',
				},
				{
					text:'Записать',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:109px;width:638px;height:212px;',
			height: 212,width: 638,
			columns:
			[
				{
					text:'',
					width:'20',
				},
				{
					text:'Счет Дт',
					width:'100',
				},
				{
					text:'Валюта Дт',
					width:'70',
				},
				{
					text:'Вал. сумма Дт',
					width:'100',
				},
				{
					text:'Количество Дт',
					width:'100',
				},
				{
					text:'Субконто Дт',
					width:'100',
				},
				{
					text:'',
					width:'100',
				},
				{
					text:'',
					width:'100',
				},
				{
					text:'Счет Кт',
					width:'100',
				},
				{
					text:'Субконто Кт',
					width:'100',
				},
				{
					text:'',
					width:'100',
				},
				{
					text:'',
					width:'100',
				},
				{
					text:'Валюта Кт',
					width:'70',
				},
				{
					text:'Вал. сумма Кт',
					width:'100',
				},
				{
					text:'Количество Кт',
					width:'100',
				},
				{
					text:'Сумма',
					width:'100',
				},
				{
					text:'Содержание',
					width:'199',
				},
				{
					text:'Первичный документ',
					width:'57',
				},
				{
					text:'НЖ',
					width:'8',
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:84px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:94px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'от:',
			style: 'position:absolute;left:176px;top:33px;width:16px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:194px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:56px;width:84px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:94px;top:56px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись7',
			text: 'Ответственный:',
			style: 'position:absolute;left:336px;top:56px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:426px;top:56px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись8',
			text: 'Период  с:',
			style: 'position:absolute;left:336px;top:33px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодНачало',
			style: 'position:absolute;left:426px;top:33px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись9',
			text: 'по:',
			style: 'position:absolute;left:516px;top:33px;width:15px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодКонец',
			style: 'position:absolute;left:533px;top:33px;width:88px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаВыбораПериода',
			text: '...',
			style: 'position:absolute;left:625px;top:33px;width:19px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Показать протокол переноса',
			style: 'position:absolute;left:477px;top:85px;width:169px;height:24px;',
		},
	]
});