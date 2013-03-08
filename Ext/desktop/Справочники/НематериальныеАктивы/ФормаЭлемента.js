Ext.define('Справочники.НематериальныеАктивы.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 441,width: 500,
	iconCls: 'bogus',
	title: 'Нематериальные активы и расходы на НИОКР',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:452px;top:56px;width:40px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:94px;top:56px;width:312px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Родитель',
			style: 'position:absolute;left:94px;top:33px;width:398px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НаименованиеПолное',
			style: 'position:absolute;left:94px;top:83px;width:398px;height:40px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидНМА',
			style: 'position:absolute;left:152px;top:176px;width:340px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'АмортизационнаяГруппа',
			style: 'position:absolute;left:152px;top:199px;width:340px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидОбъектаУчета',
			style: 'position:absolute;left:152px;top:153px;width:340px;height:19px;',
		},
	]
});