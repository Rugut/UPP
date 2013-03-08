Ext.define('Документы.КонтролируемыеЗначенияПоБюджетам.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 458,width: 410,
	iconCls: 'bogus',
	title: 'Контролируемые значения по бюджетам',
	
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
			style: 'position:absolute;left:194px;top:33px;width:208px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Сценарий',
			style: 'position:absolute;left:94px;top:57px;width:308px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидКонтролируемыхЗначений',
			style: 'position:absolute;left:182px;top:85px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИспользованиеКонтролируемыхЗначений',
			style: 'position:absolute;left:182px;top:109px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидОграниченияОборотов',
			style: 'position:absolute;left:182px;top:133px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КонтролирующийСценарий',
			style: 'position:absolute;left:182px;top:157px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:93px;top:382px;width:309px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Состояние',
			style: 'position:absolute;left:93px;top:358px;width:309px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВвода1',
			style: 'position:absolute;left:93px;top:406px;width:309px;height:19px;',
		},
	]
});