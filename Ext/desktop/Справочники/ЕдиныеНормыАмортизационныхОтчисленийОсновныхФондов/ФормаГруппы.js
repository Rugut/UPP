Ext.define('Справочники.ЕдиныеНормыАмортизационныхОтчисленийОсновныхФондов.ФормаГруппы',
	{
	extend: 'Ext.window.Window',
	height: 85,width: 463,
	iconCls: 'bogus',
	title: 'Группа Единые нормы амортизационных отчислений на полное восстановление основных фондов',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:388px;top:33px;width:67px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:131px;top:33px;width:221px;height:19px;',
		},
	]
});