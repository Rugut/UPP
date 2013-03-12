Ext.define('Документы.ОтражениеВУчетеБухгалтерскихРасчетовСПерсоналом.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:341px;height:157px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Отражение в учете бухгалтерских расчетов с персоналом',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:105px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:113px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОт',
			text: 'от:',
			style: 'position:absolute;left:195px;top:33px;width:16px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:213px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьМесяц',
			text: 'Месяц начисления:',
			style: 'position:absolute;left:8px;top:57px;width:105px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодРегистрации',
			style: 'position:absolute;left:113px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:8px;top:81px;width:105px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:113px;top:81px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:105px;width:105px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:113px;top:105px;width:220px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:341px;height:25px;',
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
					text:'Редактировать номер',
				},
				{
					text:'Структура подчиненности документа',
				},
				{
					text:'',
				},
				'-',
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:132px;width:341px;height:25px;',
			items:
			[
				'-',
				{
					text:'Записать',
				},
				'-',
				{
					text:'Закрыть',
				},
				{
					text:'OK',
				},
			]
		},
	]
});