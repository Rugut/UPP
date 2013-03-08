Ext.define('Справочники.ВидыЕжегодныхОтпусков.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 183,width: 470,
	iconCls: 'bogus',
	title: 'Вид ежегодного отпуска',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:382px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:93px;top:33px;width:251px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КоличествоДнейОтпускаВГод',
			style: 'position:absolute;left:419px;top:131px;width:43px;height:19px;',
		},
	]
});