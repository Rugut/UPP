Ext.define('Справочники.ГодовыеГрафикиАмортизацииОС.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 321,width: 476,
	iconCls: 'bogus',
	title: 'Годовые графики амортизации ОС',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:460px;height:280px;',
			height: 280,width: 460,
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
					text:'Комментарий',
				},
				{
					text:'Коэффициент1',
				},
				{
					text:'Коэффициент2',
				},
				{
					text:'Коэффициент3',
				},
				{
					text:'Коэффициент4',
				},
				{
					text:'Коэффициент5',
				},
				{
					text:'Коэффициент6',
				},
				{
					text:'Коэффициент7',
				},
				{
					text:'Коэффициент8',
				},
				{
					text:'Коэффициент9',
				},
				{
					text:'Коэффициент10',
				},
				{
					text:'Коэффициент11',
				},
				{
					text:'Коэффициент12',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:476px;height:25px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'Разделитель',
				},
			]
		},
	]
});