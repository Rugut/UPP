Ext.define('Справочники.ВидыОплатЧекаККМ.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 180,width: 454,
	iconCls: 'bogus',
	title: 'Вид оплаты чека ККМ',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:386px;top:33px;width:60px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:148px;top:33px;width:204px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТипОплаты',
			style: 'position:absolute;left:148px;top:57px;width:298px;height:19px;',
		},
	]
});