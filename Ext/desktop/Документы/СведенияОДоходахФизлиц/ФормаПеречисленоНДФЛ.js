Ext.define('Документы.СведенияОДоходахФизлиц.ФормаПеречисленоНДФЛ',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:619px;height:347px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Справочно',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:12px;top:26px;width:599px;height:140px;',
			height: 140,width: 599,
			columns:
			[
				{
					text:'№',
					width:'25',
				},
				{
					text:'Физ лицо',
					width:'103',
				},
				{
					text:'Ставка',
					width:'50',
				},
				{
					text:'КБК',
					width:'74',
				},
				{
					text:'Код по ОКАТО',
					width:'84',
				},
				{
					text:'Перечислено',
					width:'100',
				},
				{
					text:'Удержано (справочно)',
					width:'88',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:12px;top:190px;width:599px;height:149px;',
			height: 149,width: 599,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Ставка',
					width:'100',
				},
				{
					text:'КБК',
					width:'100',
				},
				{
					text:'Код по ОКАТО',
					width:'122',
				},
				{
					text:'Перечислено',
					width:'106',
				},
			]
		},
	]
});