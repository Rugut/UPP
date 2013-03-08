Ext.define('Документы.СписаниеОС.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 413,width: 689,
	iconCls: 'bogus',
	title: 'Списание ОС',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:94px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:194px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:94px;top:337px;width:587px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:94px;top:361px;width:587px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:94px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Событие',
			style: 'position:absolute;left:94px;top:105px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПричинаСписания',
			style: 'position:absolute;left:94px;top:81px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетСписанияБУ',
			style: 'position:absolute;left:416px;top:57px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетСписанияНУ',
			style: 'position:absolute;left:416px;top:81px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоБУ',
			style: 'position:absolute;left:561px;top:57px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоНУ',
			style: 'position:absolute;left:561px;top:81px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СобытиеРегл',
			style: 'position:absolute;left:416px;top:105px;width:265px;height:19px;',
		},
	]
});