Ext.define('Документы.УчетЗатратНаИсточникиПерсонала.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 398,width: 504,
	iconCls: 'bogus',
	title: 'Учет затрат на источники персонала',
	
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
			style: 'position:absolute;left:94px;top:322px;width:402px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:94px;top:346px;width:402px;height:19px;',
		},
	]
});