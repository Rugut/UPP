Ext.define('Документы.ОтсутствияНаРабочемМесте.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 313,width: 378,
	iconCls: 'bogus',
	title: 'Отсутствие на рабочем месте',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:114px;top:237px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:8px;top:182px;width:362px;height:41px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:114px;top:261px;width:256px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПричинаОтсутствия',
			style: 'position:absolute;left:74px;top:131px;width:296px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Сотрудник',
			style: 'position:absolute;left:74px;top:33px;width:296px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаВТеченииДняУйдет',
			style: 'position:absolute;left:169px;top:83px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаНесколькоДнейДатаОкончания',
			style: 'position:absolute;left:74px;top:107px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаВТеченииДняПридет',
			style: 'position:absolute;left:169px;top:107px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаНесколькоДнейДатаНачала',
			style: 'position:absolute;left:74px;top:83px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:290px;top:237px;width:80px;height:19px;',
		},
	]
});