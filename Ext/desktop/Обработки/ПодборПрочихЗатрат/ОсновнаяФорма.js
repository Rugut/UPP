Ext.define('Обработки.ПодборПрочихЗатрат.ОсновнаяФорма',
	{
	extend: 'Ext.window.Window',
	height: 450,width: 504,
	iconCls: 'bogus',
	title: 'Обработка  Подбор прочих затрат',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:81px;width:489px;height:156px;',
			height: 156,width: 489,
			columns:
			[
				{
					text:'Наименование',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:245px;width:489px;height:197px;',
			height: 197,width: 489,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'Код',
				},
				{
					text:'Наименование',
				},
				{
					text:'ОстатокУпр',
				},
				{
					text:'ОстатокРегл',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Подразделение',
			style: 'position:absolute;left:121px;top:8px;width:290px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаОбновить',
			text: 'Обновить',
			style: 'position:absolute;left:416px;top:8px;width:81px;height:43px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПодразделениеОрганизации',
			style: 'position:absolute;left:121px;top:32px;width:290px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОстатков',
			style: 'position:absolute;left:416px;top:56px;width:81px;height:19px;',
		},
	]
});