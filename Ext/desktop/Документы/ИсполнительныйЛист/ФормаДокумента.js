Ext.define('Документы.ИсполнительныйЛист.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 498,width: 708,
	iconCls: 'bogus',
	title: 'Исполнительный лист',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:454px;top:33px;width:104px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:580px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Физлицо',
			style: 'position:absolute;left:100px;top:57px;width:246px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:100px;top:33px;width:246px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНачала',
			style: 'position:absolute;left:454px;top:129px;width:79px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОкончания',
			style: 'position:absolute;left:553px;top:129px;width:79px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Размер',
			style: 'position:absolute;left:121px;top:294px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:100px;top:446px;width:600px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'РеквизитыИсполнительногоДокумента',
			style: 'position:absolute;left:454px;top:105px;width:246px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Получатель',
			style: 'position:absolute;left:100px;top:129px;width:246px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Предел',
			style: 'position:absolute;left:121px;top:317px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВвода5',
			style: 'position:absolute;left:454px;top:57px;width:246px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаДействия',
			style: 'position:absolute;left:100px;top:177px;width:79px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПрожиточныйМинимум',
			style: 'position:absolute;left:265px;top:270px;width:232px;height:19px;',
		},
	]
});