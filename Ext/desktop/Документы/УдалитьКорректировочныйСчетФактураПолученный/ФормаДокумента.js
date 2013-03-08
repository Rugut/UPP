Ext.define('Документы.УдалитьКорректировочныйСчетФактураПолученный.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 445,width: 675,
	iconCls: 'bogus',
	title: 'Корректировочный счет-фактура полученный',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:100px;top:32px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:200px;top:32px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:100px;top:393px;width:567px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:100px;top:56px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Контрагент',
			style: 'position:absolute;left:100px;top:80px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДоговорКонтрагента',
			style: 'position:absolute;left:447px;top:80px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:100px;top:369px;width:567px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетФактура',
			style: 'position:absolute;left:100px;top:104px;width:567px;height:19px;',
		},
	]
});