Ext.define('Справочники.НастройкиРегламентногоФормированияДокументовПоНДС.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 238,width: 400,
	iconCls: 'bogus',
	title: 'Настройки регламентного формирования документов по НДС',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:135px;top:57px;width:257px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Родитель',
			style: 'position:absolute;left:135px;top:33px;width:257px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:135px;top:81px;width:257px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:135px;top:186px;width:257px;height:19px;',
		},
	]
});