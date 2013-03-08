Ext.define('Справочники.ОсновныеСредства.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 495,width: 764,
	iconCls: 'bogus',
	title: 'Основные средства',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:666px;top:33px;width:90px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:94px;top:33px;width:484px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПрочиеСведения',
			style: 'position:absolute;left:94px;top:443px;width:662px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:94px;top:57px;width:484px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИнвентарныйНомер',
			style: 'position:absolute;left:666px;top:57px;width:90px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаСведений',
			style: 'position:absolute;left:94px;top:81px;width:122px;height:19px;',
		},
	]
});