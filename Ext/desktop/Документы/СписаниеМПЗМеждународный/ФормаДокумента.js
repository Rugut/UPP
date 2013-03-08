Ext.define('Документы.СписаниеМПЗМеждународный.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 187,width: 351,
	iconCls: 'bogus',
	title: 'Списание МПЗ (международный)',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:99px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:199px;top:33px;width:144px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:99px;top:110px;width:244px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:99px;top:135px;width:244px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:99px;top:85px;width:244px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодНачало',
			style: 'position:absolute;left:99px;top:59px;width:101px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодКонец',
			style: 'position:absolute;left:219px;top:59px;width:101px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаВыбораПериода',
			text: '...',
			style: 'position:absolute;left:324px;top:59px;width:19px;height:19px;',
		},
	]
});