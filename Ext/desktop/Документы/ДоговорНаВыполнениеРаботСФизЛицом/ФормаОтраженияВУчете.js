Ext.define('Документы.ДоговорНаВыполнениеРаботСФизЛицом.ФормаОтраженияВУчете',
	{
	extend: 'Ext.window.Window',
	height: 173,width: 514,
	iconCls: 'bogus',
	title: 'Отражение в учете договора',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:148px;width:514px;height:25px;',
			items:
			[
				{
					text:'ДействиеОК',
				},
				{
					text:'Действие6',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СпособОтраженияВБухучете',
			style: 'position:absolute;left:8px;top:27px;width:498px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтнесениеРасходовКДеятельностиЕНВД',
			style: 'position:absolute;left:8px;top:121px;width:498px;height:19px;',
		},
	]
});