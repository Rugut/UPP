Ext.define('Документы.УдалитьОтсутствиеНаРаботе.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:447px;height:298px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Отсутствие на работе',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:85px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:178px;top:33px;width:16px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:96px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:196px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:447px;height:25px;',
			items:
			[
				{
					text:'',
				},
				{
					text:'Редактировать номер',
				},
				'-',
				'-',
				{
					text:'Структура подчиненности документа',
				},
				'-',
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:246px;width:85px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:246px;width:343px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:97px;width:431px;height:120px;',
			height: 120,width: 431,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Работник',
					width:'168',
				},
				{
					text:'Таб. №',
					width:'87',
				},
				{
					text:'Причина отсутствия',
					width:'80',
				},
				{
					text:'С ...',
					width:'64',
				},
				{
					text:'По',
					width:'64',
				},
				{
					text:'Напомнить',
					width:'128',
				},
				{
					text:'Освобождать ставку',
					width:'128',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:73px;width:431px;height:24px;',
			items:
			[
				'-',
				'-',
				'-',
				{
					text:'Списком работников',
				},
				{
					text:'Подбор',
				},
				{
					text:'Заполнить по графику отпусков',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:273px;width:447px;height:25px;',
			items:
			[
				'-',
				{
					text:'ОК',
				},
				'-',
				{
					text:'Закрыть',
				},
				{
					text:'Записать',
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Ответственный:',
			style: 'position:absolute;left:8px;top:222px;width:85px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:96px;top:222px;width:343px;height:19px;',
		},
	]
});