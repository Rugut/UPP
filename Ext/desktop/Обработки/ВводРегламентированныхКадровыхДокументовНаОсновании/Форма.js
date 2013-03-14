Ext.define('Обработки.ВводРегламентированныхКадровыхДокументовНаОсновании.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:400px;height:262px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Ввод на основании',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьОснование',
			text: 'Основание:',
			style: 'position:absolute;left:8px;top:4px;width:61px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДокументОснование',
			style: 'position:absolute;left:73px;top:4px;width:319px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:28px;width:384px;height:24px;',
			items:
			[
				{
					text:'Установить флажки',
				},
				{
					text:'Снять флажки',
				},
				'-',
				{
					text:'Обновить',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:52px;width:384px;height:177px;',
			height: 177,width: 384,
			columns:
			[
				{
					text:'',
					width:'21',
				},
				{
					text:'Организация',
					width:'210',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:237px;width:400px;height:25px;',
			items:
			[
				{
					text:'Выполнить',
				},
				'-',
				{
					text:'Закрыть',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
	]
});