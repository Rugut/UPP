Ext.define('Обработки.ФормированиеЦен.ФормаВыбораТипаЦен',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:263px;height:232px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Форма выбора типа цен',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:6px;width:247px;height:24px;',
			items:
			[
				{
					text:'Добавить тип цен',
				},
				'-',
				'-',
				{
					text:'Установить все пометки',
				},
				{
					text:'Снять все пометки',
				},
				'-',
				{
					text:'Действие3',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие2',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:207px;width:263px;height:25px;',
			items:
			[
				{
					text:'OK',
				},
				'-',
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:30px;width:247px;height:145px;',
			height: 145,width: 247,
			columns:
			[
				{
					text:'Тип цен/скидок',
					width:'100',
				},
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Перемещать отмеченные элементы наверх',
			style: 'position:absolute;left:8px;top:180px;width:247px;height:19px;',
		},
	]
});