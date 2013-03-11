Ext.define('Документы.СведенияОДоходахФизлиц.ФормаПеречисленоНДФЛ',
	{
	extend: 'Ext.window.Window',
	height: 347,width: 619,
	iconCls: 'bogus',
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
					text:'НомерСтроки',
				},
				{
					text:'ФизЛицо',
				},
				{
					text:'Ставка',
				},
				{
					text:'КБК',
				},
				{
					text:'КодПоОКАТО',
				},
				{
					text:'Перечислено',
				},
				{
					text:'Удержано',
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
					text:'НомерСтроки',
				},
				{
					text:'Ставка',
				},
				{
					text:'КБК',
				},
				{
					text:'КодПоОКАТО',
				},
				{
					text:'Перечислено',
				},
			]
		},
	]
});