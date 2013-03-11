Ext.define('Справочники.ЕдиныеНормыАмортизационныхОтчисленийОсновныхФондов.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 238,width: 522,
	iconCls: 'bogus',
	title: 'Единые нормы амортизационных отчислений на полное восстановление основных фондов',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:121px;top:33px;width:90px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:121px;top:58px;width:393px;height:84px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НормаАмортизационныхОтчислений',
			style: 'position:absolute;left:302px;top:154px;width:90px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПроцентОтСтоимостиМашины',
			style: 'position:absolute;left:302px;top:179px;width:90px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:522px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:213px;width:522px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель1',
				},
			]
		},
	]
});