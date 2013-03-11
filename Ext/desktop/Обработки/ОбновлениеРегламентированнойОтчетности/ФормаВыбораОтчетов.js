Ext.define('Обработки.ОбновлениеРегламентированнойОтчетности.ФормаВыбораОтчетов',
	{
	extend: 'Ext.window.Window',
	height: 321,width: 482,
	iconCls: 'bogus',
	title: 'Выберите обновляемые отчеты',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:296px;width:482px;height:25px;',
			items:
			[
				{
					text:'Справка',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель1',
				},
			]
		},
		{
			xtype: 'button',
			name: 'КнопкаУстановитьВсе',
			text: '',
			style: 'position:absolute;left:450px;top:8px;width:24px;height:24px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаСнятьВсе',
			text: '',
			style: 'position:absolute;left:450px;top:37px;width:24px;height:24px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:8px;width:440px;height:280px;',
			height: 280,width: 440,
			columns:
			[
				{
					text:'Наименование',
				},
				{
					text:'Описание',
				},
			]
		},
	]
});