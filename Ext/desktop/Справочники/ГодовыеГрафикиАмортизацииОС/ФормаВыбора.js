Ext.define('Справочники.ГодовыеГрафикиАмортизацииОС.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:476px;height:321px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
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
					text:'',
					width:'32',
				},
				{
					text:'Код',
					width:'40',
				},
				{
					text:'Наименование',
					width:'220',
				},
				{
					text:'Прочие сведения',
					width:'120',
				},
				{
					text:'Январь',
					width:'80',
				},
				{
					text:'Февраль',
					width:'80',
				},
				{
					text:'Март',
					width:'80',
				},
				{
					text:'Апрель',
					width:'80',
				},
				{
					text:'Май',
					width:'80',
				},
				{
					text:'Июнь',
					width:'80',
				},
				{
					text:'Июль',
					width:'80',
				},
				{
					text:'Август',
					width:'80',
				},
				{
					text:'Сентябрь',
					width:'80',
				},
				{
					text:'Октябрь',
					width:'80',
				},
				{
					text:'Ноябрь',
					width:'80',
				},
				{
					text:'Декабрь',
					width:'80',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:476px;height:25px;',
			items:
			[
				{
					text:'Выбрать',
				},
				'-',
			]
		},
	]
});