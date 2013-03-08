Ext.define('Справочники.ОбщероссийскийКлассификаторОсновныхФондов.ФормаГруппы',
	{
	extend: 'Ext.window.Window',
	height: 219,width: 427,
	iconCls: 'bogus',
	title: 'Группа Общероссийский классификатор основных фондов',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:48px;top:33px;width:199px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:141px;top:58px;width:278px;height:46px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КонтрольноеЧисло',
			style: 'position:absolute;left:365px;top:33px;width:54px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НаименованиеГруппировки',
			style: 'position:absolute;left:141px;top:108px;width:278px;height:46px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'АмортизационнаяГруппа',
			style: 'position:absolute;left:141px;top:167px;width:278px;height:19px;',
		},
	]
});