Ext.define('Справочники.НастройкиФормированияДокументовВыпускаПродукции.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 339,width: 658,
	iconCls: 'bogus',
	title: 'Настройки формирования документов выпуска продукции',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:96px;top:57px;width:554px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Подразделение',
			style: 'position:absolute;left:96px;top:81px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:287px;width:554px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Родитель',
			style: 'position:absolute;left:96px;top:33px;width:554px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНачалаОбработки',
			style: 'position:absolute;left:570px;top:81px;width:80px;height:19px;',
		},
	]
});